package dev.netwid.blps.dto;

import lombok.*;

import java.time.LocalDateTime;

@Data
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class AdDto {
    private String username;
    private int adId;
    private String userAgent;
    private String ip;
    private String action;
    private LocalDateTime serverTimestamp;
}