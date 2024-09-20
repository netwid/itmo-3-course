package dev.netwid.blps.lab2.service;

import dev.netwid.blps.lab2.controller.dto.AdSummaryDTO;
import dev.netwid.blps.lab2.primary.entity.Ad;
import dev.netwid.blps.lab2.primary.entity.User;
import org.springframework.data.domain.Page;

import java.time.ZonedDateTime;
import java.util.List;

public interface AdService {
    Page<AdSummaryDTO> getAllAds(int page, int size, String ip, String userAgent, String username);
    Ad getAd(int id, String ip, String userAgent, String username);
    void saveAd(Ad ad, String ip, String userAgent, String username);
    void approveAd(int id, String ip, String userAgent, String username);
    void payAd(int id, String ip, String userAgent, String username);
    void deleteAd(int id, User currentUser, String ip, String userAgent, String username);
    List<ZonedDateTime> getStats(int id, String ip, String userAgent, String username);
}
