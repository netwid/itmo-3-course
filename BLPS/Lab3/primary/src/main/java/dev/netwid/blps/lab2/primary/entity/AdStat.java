package dev.netwid.blps.lab2.primary.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.ZonedDateTime;

@Entity
@Getter
@Setter
@Table(name = "ad_stat")
public class AdStat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ad_stat_id")
    private int id;

    @Column(name = "ad_id")
    private int adId;

    @Column(name = "time")
    private ZonedDateTime time;
}
