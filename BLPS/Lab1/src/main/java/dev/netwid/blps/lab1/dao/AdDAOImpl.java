package dev.netwid.blps.lab1.dao;

import dev.netwid.blps.lab1.entity.Ad;
import dev.netwid.blps.lab1.entity.AdStat;
import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Repository;

import java.time.ZonedDateTime;
import java.util.List;

@Repository
public class AdDAOImpl implements AdDAO {
    @Autowired
    private EntityManager entityManager;

    @Override
    public List<Ad> getAllAds() {
        Query query = entityManager.createQuery("from Ad");
        List<Ad> allAds = query.getResultList();

        return allAds;
    }

    @Override
    public Ad getAd(int id) {
        return entityManager.find(Ad.class, id);
    }

    @Override
    public void saveAd(Ad ad) {
        Ad newAd = entityManager.merge(ad);
        ad.setId(newAd.getId());
    }

    @Override
    public void approveAd(int id) {
        Query query = entityManager.createQuery("update Ad set isApproved = true where id = :adId");
        query.setParameter("adId", id);
        query.executeUpdate();
    }

    @Override
    public void payAd(int id) {
        Query query = entityManager.createQuery("update Ad set isPaid = true where id = :adId");
        query.setParameter("adId", id);
        query.executeUpdate();
    }

    @Override
    public void deleteAd(int id) {
        Query query = entityManager.createQuery("delete from Ad where id = :adId");
        query.setParameter("adId", id);
        query.executeUpdate();
    }

    @Override
    public List<ZonedDateTime> getStats(int id) {
        Query query = entityManager.createQuery("from AdStat where adId = :adId");
        query.setParameter("adId", id);
        List<AdStat> stats = query.getResultList();
        return stats.stream().map(AdStat::getTime).toList();
    }

    public void recordStat(int id) {
        Query query = entityManager.createNativeQuery("insert into ad_stat (ad_id, time) values (:adId, NOW())");
        query.setParameter("adId", id);
        query.executeUpdate();
    }
}
