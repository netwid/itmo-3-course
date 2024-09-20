package dev.netwid.blps.stats.service;

import dev.netwid.blps.dto.AdDto;
import dev.netwid.blps.dto.AuthDto;
import dev.netwid.blps.stats.primary.entity.AdStats;
import dev.netwid.blps.stats.primary.entity.AuthLog;
import dev.netwid.blps.stats.primary.repository.AdsStatsRepository;
import dev.netwid.blps.stats.primary.repository.AuthLogRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Slf4j
@Service
@AllArgsConstructor
public class StatsService {
    private final AdsStatsRepository adsStatsRepository;
    private final AuthLogRepository authLogRepository;
    private final TelegramService telegramService;

    @KafkaListener(topics = "ad_events", groupId = "stats-group")
    public void listenAdEvents(ConsumerRecord<String, AdDto> record) {
        AdDto dto = record.value();

        log.info("Received ad event [key: {}, username: {}, adId: {}, action: {}, ip: {}, userAgent: {}, timestamp: {}]",
                record.key(), dto.getUsername(), dto.getAdId(), dto.getAction(), dto.getIp(), dto.getUserAgent(), dto.getServerTimestamp());

        AdStats adStats = convertToAdStats(dto);
        adsStatsRepository.save(adStats);

        log.info("Ad stats saved successfully for adId: {}, action: {}, username: {}", dto.getAdId(), dto.getAction(), dto.getUsername());
    }

    @KafkaListener(topics = "auth_events", groupId = "stats-group")
    public void listenAuthEvents(ConsumerRecord<String, AuthDto> record) {
        AuthDto dto = record.value();

        log.info("Received auth event [key: {}, username: {}, isSucceed: {}, isNew: {}, ip: {}, userAgent: {}, timestamp: {}]",
                record.key(), dto.getUsername(), dto.isSucceed(), dto.isNew(), dto.getIp(), dto.getUserAgent(), dto.getServerTimestamp());

        AuthLog authLog = convertToAuthLog(dto);
        authLogRepository.save(authLog);

        log.info("Auth log saved successfully for username: {}, status: {}, isNew: {}", dto.getUsername(), dto.isSucceed(), dto.isNew());
    }

    @Scheduled(cron = "*/10 * * * * ?")
    public void sendPeriodicReport() {
        LocalDateTime oneMinuteAgo = LocalDateTime.now().minusMinutes(1);
    
        Map<String, Long> adActionCounts = adsStatsRepository.findByServerTimestampAfter(oneMinuteAgo).stream()
                .collect(Collectors.groupingBy(AdStats::getAction, Collectors.counting()));
    
        long authSuccessCount = authLogRepository.countByIsSucceedAndServerTimestampAfter(true, oneMinuteAgo);
    
        long authRegistrationCount = authLogRepository.countByIsNewAndServerTimestampAfter(true, oneMinuteAgo);
    
        String adReport = adActionCounts.isEmpty() 
            ? "Нет событий" 
            : adActionCounts.entrySet().stream()
                .map(entry -> String.format("%s: %d", entry.getKey(), entry.getValue()))
                .collect(Collectors.joining("\n"));
    
        String report = String.format(
                "События за последнюю минуту:\n\n" +
                "ad:\n%s\n\n" +
                "auth:\n" +
                "Входов: %d\n" +
                "Регистраций: %d",
                adReport,
                authSuccessCount,
                authRegistrationCount
        );
    
        telegramService.sendMessage(report);
    }

    public List<AdStats> getAd(int adId) {
        return adsStatsRepository.findByAdId(adId);
    }

    private AdStats convertToAdStats(AdDto dto) {
        return new AdStats(
                null,
                dto.getUsername(),
                dto.getAdId(),
                dto.getAction(),
                dto.getUserAgent(),
                dto.getIp(),
                dto.getServerTimestamp()
        );
    }

    private AuthLog convertToAuthLog(AuthDto dto) {
        return new AuthLog(
                null,
                dto.getUsername(),
                dto.getUserAgent(),
                dto.getIp(),
                dto.getServerTimestamp(),
                dto.isSucceed(),
                dto.isNew()
        );
    }
}
