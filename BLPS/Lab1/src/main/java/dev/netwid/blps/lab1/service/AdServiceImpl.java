package dev.netwid.blps.lab1.service;

import dev.netwid.blps.lab1.dao.AdDAO;
import dev.netwid.blps.lab1.entity.Ad;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.ZonedDateTime;
import java.util.List;

@Service
public class AdServiceImpl implements AdService {
    @Autowired
    AdDAO adDAO;

    @Override
    @Transactional
    public List<Ad> getAllAds() {
        return adDAO.getAllAds();
    }

    @Override
    @Transactional
    public Ad getAd(int id) {
        adDAO.recordStat(id);
        return adDAO.getAd(id);
    }

    @Override
    @Transactional
    public void saveAd(Ad ad) {
        adDAO.saveAd(ad);
    }

    @Override
    @Transactional
    public void approveAd(int id) {
        adDAO.approveAd(id);
    }

    @Override
    @Transactional
    public void payAd(int id) {
        adDAO.payAd(id);
    }

    @Override
    @Transactional
    public void deleteAd(int id) {
        adDAO.deleteAd(id);
    }

    @Override
    public List<ZonedDateTime> getStats(int id) {
        return adDAO.getStats(id);
    }
}
