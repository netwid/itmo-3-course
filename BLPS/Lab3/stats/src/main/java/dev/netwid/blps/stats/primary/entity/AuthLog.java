package dev.netwid.blps.stats.primary.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "auth_log")
public class AuthLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Replaced userId with username
    @Column(name = "username", nullable = false)
    private String username;  // Change Long to String and rename to username

    @Column(name = "user_agent", nullable = false)
    private String userAgent;

    @Column(name = "ip", nullable = false)
    private String ip;

    @Column(name = "server_timestamp", nullable = false)
    private LocalDateTime serverTimestamp;

    @Column(name = "is_succeed", nullable = false)
    private boolean isSucceed;

    @Column(name = "is_new", nullable = false)
    private boolean isNew;
}
