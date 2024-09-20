package dev.netwid.blps.stats.primary.repository;

import dev.netwid.blps.stats.primary.entity.AdStats;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface AdsStatsRepository extends JpaRepository<AdStats, Long> {
    List<AdStats> findByServerTimestampAfter(LocalDateTime timestamp);
    List<AdStats> findByAdId(int adId);
}
