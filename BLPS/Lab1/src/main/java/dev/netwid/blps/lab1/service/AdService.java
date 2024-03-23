package dev.netwid.blps.lab1.service;

import dev.netwid.blps.lab1.entity.Ad;

import java.time.ZonedDateTime;
import java.util.List;

public interface AdService {
    List<Ad> getAllAds();
    Ad getAd(int id);
    void saveAd(Ad ad);
    void approveAd(int id);
    void payAd(int id);
    void deleteAd(int id);
    List<ZonedDateTime> getStats(int id);
}
