package dev.netwid.blps.lab2.service;

import dev.netwid.blps.lab2.controller.dto.AdSummaryDTO;
import dev.netwid.blps.lab2.primary.entity.Ad;
import dev.netwid.blps.lab2.primary.entity.AdStat;
import dev.netwid.blps.lab2.primary.entity.User;
import dev.netwid.blps.lab2.primary.repository.AdRepository;
import dev.netwid.blps.lab2.primary.repository.AdStatRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.time.ZonedDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class AdServiceImpl implements AdService {
    @Autowired
    private AdRepository adRepository;

    @Autowired
    private AdStatRepository adStatRepository;

    @Override
    @Transactional
    public Page<AdSummaryDTO> getAllAds(int page, int size) {
        return adRepository.findAllAdsSummary(PageRequest.of(page, size));
    }

    @Override
    @Transactional()
    public Ad getAd(int id) {
        return adRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Ad not found with id: " + id));
    }

    @Override
    @Transactional
    public void saveAd(Ad ad) {
        adRepository.save(ad);
    }

    @Override
    @Transactional
    public void approveAd(int id) {
        Ad ad = adRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Ad not found with id: " + id));
        ad.setApproved(true);
        adRepository.save(ad);
    }

    @Override
    @Transactional
    public void payAd(int id) {
        Ad ad = adRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Ad not found with id: " + id));
        ad.setPaid(true);
        adRepository.save(ad);
    }

    @Override
    @Transactional
    public void deleteAd(int adId, User currentUser) {
        Ad existingAd = adRepository.findById(adId)
                .orElseThrow(() -> new IllegalArgumentException("Ad not found with id: " + adId));

        if (!existingAd.getUser().getId().equals(currentUser.getId())) {
            throw new SecurityException("You are not authorized to delete this ad");
        }

        adRepository.deleteById(adId);
    }

    @Override
    @Transactional()
    public List<ZonedDateTime> getStats(int id) {
        List<AdStat> stats = adStatRepository.findByAdId(id);
        return stats.stream().map(AdStat::getTime).collect(Collectors.toList());
    }
}
