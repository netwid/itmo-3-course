package dev.netwid.blps.lab2.primary.repository;

import dev.netwid.blps.lab2.controller.dto.AdSummaryDTO;
import dev.netwid.blps.lab2.primary.entity.Ad;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface AdRepository extends JpaRepository<Ad, Integer> {
    @Query("SELECT new dev.netwid.blps.lab2.controller.dto.AdSummaryDTO(a.id, a.title) FROM Ad a")
    Page<AdSummaryDTO> findAllAdsSummary(Pageable pageable);
}
