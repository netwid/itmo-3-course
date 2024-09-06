package dev.netwid.blps.lab2.service;

public class AuthorizedUserCredentials {
    private final String username;
    private final String token;

    public AuthorizedUserCredentials(String username, String token) {
        this.username = username;
        this.token = token;
    }

    public String getUsername() {
        return username;
    }

    public String getToken() {
        return token;
    }
}
