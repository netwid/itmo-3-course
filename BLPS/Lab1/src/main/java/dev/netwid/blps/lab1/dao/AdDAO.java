package dev.netwid.blps.lab1.dao;

import dev.netwid.blps.lab1.entity.Ad;

import java.time.ZonedDateTime;
import java.util.List;

public interface AdDAO {
    List<Ad> getAllAds();
    Ad getAd(int id);
    void saveAd(Ad ad);
    void approveAd(int id);
    void payAd(int id);
    void recordStat(int id);
    void deleteAd(int id);
    List<ZonedDateTime> getStats(int id);
}
