package dev.netwid.blps.lab2.primary.repository;

import dev.netwid.blps.lab2.primary.entity.AdStat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdStatRepository extends JpaRepository<AdStat, Long> {
    List<AdStat> findByAdId(int adId);
}
