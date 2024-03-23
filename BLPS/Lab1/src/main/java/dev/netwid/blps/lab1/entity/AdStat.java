package dev.netwid.blps.lab1.entity;

import jakarta.persistence.*;

import java.time.ZonedDateTime;

@Entity
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

    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public ZonedDateTime getTime() {
        return time;
    }

    public void setTime(ZonedDateTime time) {
        this.time = time;
    }

    public int getAdId() {
        return adId;
    }

    public void setAdId(int adId) {
        this.adId = adId;
    }
}
