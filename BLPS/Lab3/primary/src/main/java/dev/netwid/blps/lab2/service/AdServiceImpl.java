package dev.netwid.blps.lab2.service;

import dev.netwid.blps.dto.AdDto;
import dev.netwid.blps.lab2.controller.dto.AdSummaryDTO;
import dev.netwid.blps.lab2.primary.entity.Ad;
import dev.netwid.blps.lab2.primary.entity.AdStat;
import dev.netwid.blps.lab2.primary.entity.User;
import dev.netwid.blps.lab2.primary.repository.AdRepository;
import dev.netwid.blps.lab2.primary.repository.AdStatRepository;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.ZonedDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
public class AdServiceImpl implements AdService {
    @Autowired
    private AdRepository adRepository;

    @Autowired
    private AdStatRepository adStatRepository;

    @Autowired
    private KafkaService kafkaService;

    @Override
    @Transactional
    public Page<AdSummaryDTO> getAllAds(int page, int size, String ip, String userAgent, String username) {
        sendAdEvent(username, ip, userAgent, 0, "view_ads");
        return adRepository.findAllAdsSummary(PageRequest.of(page, size));
    }

    @Override
    @Transactional
    public Ad getAd(int id, String ip, String userAgent, String username) {
        Ad ad = adRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Ad not found with id: " + id));
        sendAdEvent(username, ip, userAgent, ad.getId(), "view_ad");
        return ad;
    }

    @Override
    @Transactional
    public void saveAd(Ad ad, String ip, String userAgent, String username) {
        adRepository.save(ad);
        sendAdEvent(username, ip, userAgent, ad.getId(), "save_ad");
    }

    @Override
    @Transactional
    public void approveAd(int id, String ip, String userAgent, String username) {
        Ad ad = adRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Ad not found with id: " + id));
        ad.setApproved(true);
        adRepository.save(ad);
        sendAdEvent(username, ip, userAgent, ad.getId(), "approve_ad");
    }

    @Override
    @Transactional
    public void payAd(int id, String ip, String userAgent, String username) {
        Ad ad = adRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Ad not found with id: " + id));
        ad.setPaid(true);
        adRepository.save(ad);
        sendAdEvent(username, ip, userAgent, ad.getId(), "pay_ad");
    }

    @Override
    @Transactional
    public void deleteAd(int adId, User currentUser, String ip, String userAgent, String username) {
        Ad existingAd = adRepository.findById(adId)
                .orElseThrow(() -> new IllegalArgumentException("Ad not found with id: " + adId));

        if (!existingAd.getUser().getId().equals(currentUser.getId())) {
            throw new SecurityException("You are not authorized to delete this ad");
        }

        adRepository.deleteById(adId);
        sendAdEvent(username, ip, userAgent, adId, "delete_ad");
    }

    @Override
    @Transactional
    public List<ZonedDateTime> getStats(int id, String ip, String userAgent, String username) {
        List<AdStat> stats = adStatRepository.findByAdId(id);
        sendAdEvent(username, ip, userAgent, id, "view_ad_stats");
        return stats.stream().map(AdStat::getTime).collect(Collectors.toList());
    }

    private void sendAdEvent(String username, String ip, String userAgent, int adId, String action) {
        AdDto adDto = new AdDto(
                username,
                adId,
                userAgent,
                ip,
                action,
                LocalDateTime.now());

        kafkaService.send("ad_events", adDto.getUsername(), adDto);
        log.info("Sending ad event to Kafka. User: {}, Action: {}", username, action);
    }
}