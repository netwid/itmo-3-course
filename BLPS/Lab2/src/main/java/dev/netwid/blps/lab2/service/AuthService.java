package dev.netwid.blps.lab2.service;

import dev.netwid.blps.lab2.controller.dto.AuthDTO;
import dev.netwid.blps.lab2.security.JwtUtils;
import jakarta.validation.ValidationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtils jwtUtils;

    public AuthorizedUserCredentials login(AuthDTO.LoginRequest authUserRequest) throws ValidationException {
        Authentication authentication;
        try {
            authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authUserRequest.username(), authUserRequest.password())
            );
        } catch (AuthenticationException e) {
            e.printStackTrace();
            return null;
        }

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwtToken = jwtUtils.generateJwtToken((String) authentication.getPrincipal());

        return new AuthorizedUserCredentials(authUserRequest.username(), jwtToken);
    }
}