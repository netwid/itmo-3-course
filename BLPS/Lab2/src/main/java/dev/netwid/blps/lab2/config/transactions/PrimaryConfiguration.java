//package dev.netwid.blps.lab2.config.transactions;
//
//import org.springframework.beans.factory.annotation.Qualifier;
//import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
//import org.springframework.boot.autoconfigure.orm.jpa.JpaProperties;
//import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.context.annotation.Primary;
//import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
//import org.springframework.orm.jpa.JpaTransactionManager;
//import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
//import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
//import org.springframework.transaction.PlatformTransactionManager;
//
//import jakarta.persistence.EntityManagerFactory;
//import javax.sql.DataSource;
//import java.util.Map;
//import java.util.Properties;
//
//@Configuration
//@EnableJpaRepositories(
//        basePackages = {
//                "dev.netwid.blps.lab2.primary.repository"
//        },
//        entityManagerFactoryRef = "primaryEntityManagerFactory",
//        transactionManagerRef = "primaryTransactionManager")
//public class PrimaryConfiguration {
//    @Bean
//    @Primary
//    public DataSourceProperties dataSourceProperties() {
//        return new DataSourceProperties();
//    }
//
//    @Bean
//    @Primary
//    public JpaProperties jpaProperties() {
//        return new JpaProperties();
//    }
//
//    @Bean(name = "primaryEntityManagerFactory")
//    @Primary
//    public LocalContainerEntityManagerFactoryBean primaryEntityManagerFactory(DataSource dataSource,
//                                                                              JpaProperties jpaProperties) {
//        LocalContainerEntityManagerFactoryBean em = new LocalContainerEntityManagerFactoryBean();
//
//        em.setDataSource(dataSource);
//        em.setPackagesToScan(
//                "dev.netwid.blps.lab2.primary.entity"
//        );
//        em.setJpaVendorAdapter(new HibernateJpaVendorAdapter());
//
//        var properties = new Properties();
//        for (Map.Entry<String, String> stringStringEntry : jpaProperties.getProperties().entrySet()) {
//            properties.put(stringStringEntry.getKey(), stringStringEntry.getValue());
//        }
//        em.setJpaProperties(properties);
//
//        return em;
//    }
//
//    @Bean
//    @Primary
//    public PlatformTransactionManager primaryTransactionManager(
//            @Qualifier("primaryEntityManagerFactory") EntityManagerFactory entityManagerFactory) {
//        return new JpaTransactionManager(entityManagerFactory);
//    }
//}