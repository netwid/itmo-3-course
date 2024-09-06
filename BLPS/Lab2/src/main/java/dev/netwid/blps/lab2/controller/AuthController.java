package dev.netwid.blps.lab2.controller;

import dev.netwid.blps.lab2.controller.dto.AuthDTO;
import dev.netwid.blps.lab2.controller.dto.RegisterRequest;
import dev.netwid.blps.lab2.service.AuthService;
import dev.netwid.blps.lab2.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@Validated
public class AuthController {
    @Autowired
    private AuthService authService;

    @Autowired
    private UserService userService;

    @PostMapping("/auth")
    public ResponseEntity<?> login(@RequestBody AuthDTO.LoginRequest request) {
////        try {
////            LoginContext loginContext = new LoginContext("SPRINGSECURITY", new UsernamePasswordCallbackHandler(request.username(), request.password()));
////
////            loginContext.login();
//
//            Authentication authentication = new UsernamePasswordAuthenticationToken(
//                    request.username(),
//                    request.password(),
//                    Collections.singletonList(new SimpleGrantedAuthority("ROLE_USER"))
//            );;
//            String token = authService.generateToken(authentication);
//
//            AuthDTO.Response response = new AuthDTO.Response("User logged in successfully", token);
//
//            return ResponseEntity.ok(response);
////        } catch (LoginException e) {
////            System.out.println(e.getMessage());
////            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
////        }
//        authUserRequest.validate()

        var authorizedUserCredentials = authService.login(request);

        return new ResponseEntity<>(authorizedUserCredentials, HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody RegisterRequest registerRequest) {
        if (userService.existsByUsername(registerRequest.username())) {
            return ResponseEntity
                    .badRequest()
                    .body("Error: Username is already taken!");
        }

        userService.registerUser(registerRequest);
        return ResponseEntity.ok("User registered successfully!");
    }
}