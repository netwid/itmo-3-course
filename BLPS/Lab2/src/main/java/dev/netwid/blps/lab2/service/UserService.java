package dev.netwid.blps.lab2.service;

import dev.netwid.blps.lab2.controller.dto.RegisterRequest;
import dev.netwid.blps.lab2.primary.entity.User;
import dev.netwid.blps.lab2.primary.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

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

    public void registerUser(RegisterRequest registerRequest) {
        User user = new User();
        user.setUsername(registerRequest.username());
        user.setPassword(new BCryptPasswordEncoder().encode(registerRequest.password()));

        userRepository.save(user);
    }
}
