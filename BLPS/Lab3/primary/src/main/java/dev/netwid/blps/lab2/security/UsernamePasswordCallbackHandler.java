package dev.netwid.blps.lab2.security;

import javax.security.auth.callback.*;
import java.io.IOException;

public class UsernamePasswordCallbackHandler implements CallbackHandler {

    private String username;
    private String password;

    public UsernamePasswordCallbackHandler(String username, String password) {
        this.username = username;
        this.password = password;
    }

    @Override
    public void handle(Callback[] callbacks) throws IOException, UnsupportedCallbackException {
        for (Callback callback : callbacks) {
            if (callback instanceof NameCallback) {
                ((NameCallback) callback).setName(username);
            } else if (callback instanceof PasswordCallback) {
                ((PasswordCallback) callback).setPassword(password.toCharArray());
            } else {
                throw new UnsupportedCallbackException(callback);
            }
        }
    }
}
