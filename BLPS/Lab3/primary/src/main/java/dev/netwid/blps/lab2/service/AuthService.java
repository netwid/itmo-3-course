package dev.netwid.blps.lab2.service;

import dev.netwid.blps.dto.AuthDto;
import dev.netwid.blps.lab2.controller.dto.AuthDTO;
import dev.netwid.blps.lab2.security.JwtUtils;

import jakarta.validation.ValidationException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Slf4j
@Service
public class AuthService {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtils jwtUtils;

    @Autowired
    private KafkaService kafkaService;

    public AuthorizedUserCredentials login(AuthDTO.LoginRequest authUserRequest, String ip, String userAgent) throws ValidationException {
        Authentication authentication;
        try {
            authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authUserRequest.username(), authUserRequest.password())
            );
        } catch (AuthenticationException e) {
            log.error("Authentication failed for user: {}", authUserRequest.username());
            sendAuthEvent(authUserRequest.username(), ip, userAgent, false, false);
            return null;
        }

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwtToken = jwtUtils.generateJwtToken((String) authentication.getPrincipal());

        log.info("User '{}' successfully logged in.", authUserRequest.username());
        sendAuthEvent(authUserRequest.username(), ip, userAgent, true, false);

        return new AuthorizedUserCredentials(authUserRequest.username(), jwtToken);
    }


    private void sendAuthEvent(String username, String ip, String userAgent, boolean isSucceed, boolean isNewUser) {
        AuthDto authDto = new AuthDto(
                username,
                userAgent,
                ip,
                LocalDateTime.now(),
                isSucceed,
                isNewUser
        );
        log.info("Sending auth event to Kafka. User: {}, Success: {}, New User: {}", username, isSucceed, isNewUser);
        kafkaService.send("auth_events", username, authDto);
    }
}