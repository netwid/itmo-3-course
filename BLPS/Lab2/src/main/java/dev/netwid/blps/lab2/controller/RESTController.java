package dev.netwid.blps.lab2.controller;

import dev.netwid.blps.lab2.controller.dto.AdSummaryDTO;
import dev.netwid.blps.lab2.primary.entity.Ad;
import dev.netwid.blps.lab2.primary.entity.User;
import dev.netwid.blps.lab2.service.AdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.time.ZonedDateTime;
import java.util.List;

@RestController
@RequestMapping("/api")
public class RESTController {
    @Autowired
    AdService adService;

    @GetMapping("/ads")
    public Page<AdSummaryDTO> getAds(@RequestParam(defaultValue = "0") int page,
                                     @RequestParam(defaultValue = "10") int size) {
        return adService.getAllAds(page, size);
    }

    @GetMapping("/ads/{id}")
    public Ad getAd(@PathVariable int id) {
        return adService.getAd(id);
    }

    @PostMapping("/ads")
    public Ad addNewAd(@RequestBody Ad ad, @AuthenticationPrincipal User user) {
        ad.setUser(user);
        ad.setApproved(false);
        ad.setPaid(false);
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
    public ResponseEntity<?> deleteAd(@PathVariable int id, @AuthenticationPrincipal User currentUser) {
        adService.deleteAd(id, currentUser);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/ads/{id}/stats")
    public List<ZonedDateTime> getAdStats(@PathVariable int id) {
        return adService.getStats(id);
    }

    @GetMapping("/current-user")
    public String getCurrentUser(@AuthenticationPrincipal User user) {
        return "Current user: " + user.getUsername() + " current id: " + user.getId();
    }
}
