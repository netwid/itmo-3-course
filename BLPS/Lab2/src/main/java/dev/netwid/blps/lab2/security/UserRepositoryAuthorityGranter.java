package dev.netwid.blps.lab2.security;

import java.security.Principal;
import java.util.Set;

import dev.netwid.blps.lab2.primary.repository.UserRepository;
import dev.netwid.blps.lab2.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.jaas.AuthorityGranter;
import org.springframework.security.core.userdetails.UserDetailsService;

@RequiredArgsConstructor
public class UserRepositoryAuthorityGranter implements AuthorityGranter {
    private final UserRepository userRepository;

    @Override
    public Set<String> grant(Principal principal) {
        System.out.println("Granted");
        final var user = userRepository.findByUsername(principal.getName());
        return user.getRoles();
    }
}