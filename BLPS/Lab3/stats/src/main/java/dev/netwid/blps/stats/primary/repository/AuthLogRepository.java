package dev.netwid.blps.stats.primary.repository;

import dev.netwid.blps.stats.primary.entity.AuthLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;

@Repository
public interface AuthLogRepository extends JpaRepository<AuthLog, Long> {

  long countByIsSucceedAndServerTimestampAfter(boolean isSucceed, LocalDateTime timestamp);

  long countByIsNewAndServerTimestampAfter(boolean isNew, LocalDateTime timestamp);
}
