package dev.netwid.blps.dto;

import lombok.*;

import java.time.LocalDateTime;

@Data
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class AuthDto {
    private String username;
    private String userAgent;
    private String ip;
    private LocalDateTime serverTimestamp;
    private boolean isSucceed;
    private boolean isNew;
}