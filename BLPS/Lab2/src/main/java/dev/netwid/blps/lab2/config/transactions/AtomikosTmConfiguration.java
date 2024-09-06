package dev.netwid.blps.lab2.config.transactions;

import com.atomikos.icatch.jta.UserTransactionImp;
import com.atomikos.icatch.jta.UserTransactionManager;
import com.atomikos.spring.AtomikosDataSourceBean;
import jakarta.transaction.SystemException;
import jakarta.transaction.UserTransaction;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.DependsOn;
import org.springframework.context.annotation.Primary;
import org.springframework.core.annotation.Order;
import org.postgresql.xa.PGXADataSource;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.jta.JtaTransactionManager;

@Configuration
@EnableTransactionManagement(order = Integer.MIN_VALUE)
@Order(Integer.MIN_VALUE)
public class AtomikosTmConfiguration {
    @Value("${spring.datasource.url}")
    private String url;

    @Value("${spring.datasource.username}")
    private String userName;

    @Value("${spring.datasource.password}")
    private String password;

    @Bean(initMethod = "init", destroyMethod = "close")
    public AtomikosDataSourceBean myDataSource() {
        PGXADataSource pgxaDataSource = new PGXADataSource();
        pgxaDataSource.setURL(url);
        pgxaDataSource.setUser(userName);
        pgxaDataSource.setPassword(password);
        AtomikosDataSourceBean atomikosdataSourceBean = new AtomikosDataSourceBean();
        atomikosdataSourceBean.setXaDataSource(pgxaDataSource);
        atomikosdataSourceBean.setUniqueResourceName("database");
        atomikosdataSourceBean.setMaxPoolSize(10);
        return atomikosdataSourceBean;
    }

    @Bean(initMethod = "init", destroyMethod = "close")
    public UserTransactionManager userTransactionManager() {
        UserTransactionManager userTransactionManager = new UserTransactionManager();
        userTransactionManager.setForceShutdown(true);
        return userTransactionManager;
    }

    @Bean
    public UserTransaction userTransaction() throws SystemException {
        UserTransactionImp userTransactionImp = new UserTransactionImp();
        userTransactionImp.setTransactionTimeout(300);
        return userTransactionImp;
    }

    @Bean
    @Primary
    @DependsOn({"userTransaction", "userTransactionManager"})
    public JtaTransactionManager transactionManager() throws SystemException {
        JtaTransactionManager jtaTransactionManager = new JtaTransactionManager();
        jtaTransactionManager.setTransactionManager(userTransactionManager());
        jtaTransactionManager.setUserTransaction(userTransaction());
        jtaTransactionManager.setAllowCustomIsolationLevels(true);
        return jtaTransactionManager;
    }
}
