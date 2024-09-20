package dev.netwid.blps.lab2.security;

import dev.netwid.blps.lab2.primary.repository.UserRepository;
import lombok.Setter;
import org.springframework.security.authentication.jaas.AbstractJaasAuthenticationProvider;
import org.springframework.security.authentication.jaas.AuthorityGranter;
import org.springframework.security.authentication.jaas.memory.InMemoryConfiguration;
import org.springframework.security.core.userdetails.UserDetailsService;

import javax.security.auth.callback.CallbackHandler;
import javax.security.auth.login.AppConfigurationEntry;
import javax.security.auth.login.Configuration;
import javax.security.auth.login.LoginContext;
import javax.security.auth.login.LoginException;
import java.util.HashMap;
import java.util.Map;

public class MyJAASAuthenticationProvider extends AbstractJaasAuthenticationProvider {
    private Configuration configuration = null;
    private final String loginContextName = "SPRINGSECURITY";
    @Setter
    private UserDetailsService userDetailsService;

    public MyJAASAuthenticationProvider(UserRepository userRepository) {
        setAuthorityGranters(new AuthorityGranter[]{new UserRepositoryAuthorityGranter(userRepository)});
    }

    private void createConfiguration() {
        Map<String, AppConfigurationEntry[]> mappedConfigurations = new HashMap<>();

        mappedConfigurations.put(loginContextName, new AppConfigurationEntry[]{
                new AppConfigurationEntry(
                        UserDetailsLoginModule.class.getCanonicalName(),
                        AppConfigurationEntry.LoginModuleControlFlag.REQUIRED,
                        Map.of("userDetailsService", userDetailsService)
                )
        });

        configuration = new InMemoryConfiguration(mappedConfigurations);
    }

    @Override
    protected LoginContext createLoginContext(CallbackHandler handler) throws LoginException {
        if (configuration == null) {
            createConfiguration();
        }

        return new LoginContext(loginContextName, null, handler, configuration);
    }
}