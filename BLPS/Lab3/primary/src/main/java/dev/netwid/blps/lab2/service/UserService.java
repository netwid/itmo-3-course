package dev.netwid.blps.lab2.service;

import dev.netwid.blps.dto.AuthDto;
import dev.netwid.blps.lab2.controller.dto.RegisterRequest;
import dev.netwid.blps.lab2.primary.entity.User;
import dev.netwid.blps.lab2.primary.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Slf4j
@Service
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private KafkaService kafkaService;

    @Override
    public User loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
        if (user == null)
            throw new UsernameNotFoundException(username);

        return user;
    }

    public boolean existsByUsername(String username) {
        return userRepository.existsByUsername(username);
    }

    public void registerUser(RegisterRequest registerRequest, String ip, String userAgent) {
        User user = new User();
        user.setUsername(registerRequest.username());
        user.setPassword(new BCryptPasswordEncoder().encode(registerRequest.password()));

        userRepository.save(user);

        log.info("New user '{}' successfully registered. IP: {}, User-Agent: {}",
                registerRequest.username(), ip, userAgent);  // Используем переданные параметры ip и userAgent

        sendAuthEvent(registerRequest.username(), ip, userAgent, true, true);
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
