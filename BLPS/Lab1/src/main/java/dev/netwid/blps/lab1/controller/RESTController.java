package dev.netwid.blps.lab1.controller;

import dev.netwid.blps.lab1.dao.AdDAO;
import dev.netwid.blps.lab1.entity.Ad;
import dev.netwid.blps.lab1.service.AdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.ZonedDateTime;
import java.util.List;

@RestController
@RequestMapping("/api")
public class RESTController {
    @Autowired
    AdService adService;

    @GetMapping("/test")
    public String test() {
        return "saasdsad";
    }

    @GetMapping("/ads")
    public List<Ad> getAds() {
        return adService.getAllAds();
    }

    @GetMapping("/ads/{id}")
    public Ad getAd(@PathVariable int id) {
        return adService.getAd(id);
    }

    @PostMapping("/ads")
    public Ad addNewAd(@RequestBody Ad ad) {
        adService.saveAd(ad);
        return ad;
    }

    @PutMapping("/ads")
    public Ad updateAd(@RequestBody Ad ad) {
        adService.saveAd(ad);
        return ad;
    }

    @PutMapping("/ads/{id}/approve")
    public void updateAd(@PathVariable int id) {
        adService.approveAd(id);
    }

    @PutMapping("/ads/{id}/pay")
    public void payAd(@PathVariable int id) {
        adService.payAd(id);
    }

    @DeleteMapping("/ads/{id}")
    public void deleteAd(@PathVariable int id) {
        adService.deleteAd(id);
    }

    @GetMapping("/ads/{id}/stats")
    public List<ZonedDateTime> getAdStats(@PathVariable int id) {
        return adService.getStats(id);
    }
}
