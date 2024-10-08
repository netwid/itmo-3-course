package dev.netwid.blps.lab2.security;

import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.security.auth.Subject;
import javax.security.auth.callback.*;
import javax.security.auth.login.LoginException;
import javax.security.auth.spi.LoginModule;
import java.io.IOException;
import java.nio.file.attribute.UserPrincipal;
import java.security.Principal;
import java.util.Map;

public class UserDetailsLoginModule implements LoginModule {
    private Subject subject;
    private CallbackHandler callbackHandler;
    private UserDetailsService userDetailsService;
    private PasswordEncoder passwordEncoder;

    private String username;
    private boolean loginSucceeded;

    @Override
    public void initialize(
            Subject subject,
            CallbackHandler callbackHandler,
            Map<String, ?> sharedState,
            Map<String, ?> options) {

        System.out.println("Login module");

        this.subject = subject;
        this.callbackHandler = callbackHandler;
        this.userDetailsService = (UserDetailsService) options.get("userDetailsService");
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    @Override
    public boolean login() {
        final var nameCallback = new NameCallback("username");
        final var passwordCallback = new PasswordCallback("password", false);

        try {
            callbackHandler.handle(new Callback[] { nameCallback, passwordCallback });
            username = nameCallback.getName();
            final var password = String.valueOf(passwordCallback.getPassword());
            final var user = userDetailsService.loadUserByUsername(username);
            loginSucceeded = passwordEncoder.matches(password, user.getPassword());
        } catch (UsernameNotFoundException e) {
            loginSucceeded = false;
        } catch (IOException | UnsupportedCallbackException e) {
            loginSucceeded = false;
        }
        return loginSucceeded;
    }

    @Override
    public boolean commit() throws LoginException {
        if (!loginSucceeded) {
            return false;
        }
        if (username == null) {
            throw new LoginException("Username is null during the commit");
        }
        final Principal principal = (UserPrincipal) () -> username;
        subject.getPrincipals().add(principal);
        return true;
    }

    @Override
    public boolean abort() throws LoginException {
        return false;
    }

    @Override
    public boolean logout() throws LoginException {
        return false;
    }
}
