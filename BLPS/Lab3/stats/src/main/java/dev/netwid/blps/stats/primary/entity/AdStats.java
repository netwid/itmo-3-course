package dev.netwid.blps.stats.primary.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "ad_stats")
public class AdStats {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "username", nullable = false)
    private String username;

    @Column(name = "ad_id", nullable = false)
    private Integer adId;

    @Column(name = "action", nullable = false)
    private String action;

    @Column(name = "user_agent", nullable = false)
    private String userAgent;

    @Column(name = "ip", nullable = false)
    private String ip;

    @Column(name = "server_timestamp", nullable = false)
    private LocalDateTime serverTimestamp;
}
