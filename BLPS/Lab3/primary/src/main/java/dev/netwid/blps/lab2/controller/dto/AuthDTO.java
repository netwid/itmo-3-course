package dev.netwid.blps.lab2.controller.dto;

public class AuthDTO {
    public record LoginRequest(String username, String password) {
    }

    public record Response(String message, String token) {
    }
}
