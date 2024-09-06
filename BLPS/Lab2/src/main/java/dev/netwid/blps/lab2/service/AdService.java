package dev.netwid.blps.lab2.service;

import dev.netwid.blps.lab2.controller.dto.AdSummaryDTO;
import dev.netwid.blps.lab2.primary.entity.Ad;
import dev.netwid.blps.lab2.primary.entity.User;
import org.springframework.data.domain.Page;

import java.time.ZonedDateTime;
import java.util.List;

public interface AdService {
    Page<AdSummaryDTO> getAllAds(int page, int size);
    Ad getAd(int id);
    void saveAd(Ad ad);
    void approveAd(int id);
    void payAd(int id);
    void deleteAd(int id, User currentUser);
    List<ZonedDateTime> getStats(int id);
}
