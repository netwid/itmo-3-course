package dev.netwid.blps.lab2.security;

import dev.netwid.blps.lab2.primary.entity.User;
import dev.netwid.blps.lab2.service.UserService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Collection;
import java.util.Set;
import java.util.stream.Collectors;

public class AuthTokenFilter extends OncePerRequestFilter {

    @Autowired
    private JwtUtils jwtUtils;

    @Autowired
    private UserService userDetailsService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws IOException, ServletException {
        try {
            User userDetails = getUserDetails(request);
            if (userDetails != null) {
                UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
                        userDetails, null, userDetails.getAuthorities()
                );
                authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
        } catch (Exception e) {
            logger.error("Cannot set user authentication: " + e.getMessage());
        }
        filterChain.doFilter(request, response);
    }

    private User getUserDetails(HttpServletRequest request) throws Exception {
        String jwt = parseJwt(request);

        if (jwt == null || !jwtUtils.verifyToken(jwt)) {
            return null;
        }

        String username = jwtUtils.getUserNameFromJwtToken(jwt);
        if (username == null) {
            return null;
        }

        return userDetailsService.loadUserByUsername(username);
    }

    private String parseJwt(HttpServletRequest request) {
        String headerAuth = request.getHeader("Authorization");
        String bearerPrefix = "bearer ";
        if (StringUtils.hasText(headerAuth) && headerAuth.toLowerCase().startsWith(bearerPrefix)) {
            return headerAuth.substring(bearerPrefix.length());
        }
        return null;
    }
}

