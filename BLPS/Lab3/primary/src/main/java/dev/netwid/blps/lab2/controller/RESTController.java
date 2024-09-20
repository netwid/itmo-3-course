package dev.netwid.blps.lab2.controller;

import dev.netwid.blps.lab2.controller.dto.AdSummaryDTO;
import dev.netwid.blps.lab2.primary.entity.Ad;
import dev.netwid.blps.lab2.primary.entity.User;
import dev.netwid.blps.lab2.service.AdService;
import jakarta.servlet.http.HttpServletRequest;
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
                                     @RequestParam(defaultValue = "10") int size,
                                     HttpServletRequest request, @AuthenticationPrincipal User user) {
        String ip = request.getRemoteAddr();
        String userAgent = request.getHeader("User-Agent");
        String username = (user != null) ? user.getUsername() : "ANONIM";
        return adService.getAllAds(page, size, ip, userAgent, username);
    }

    @GetMapping("/ads/{id}")
    public Ad getAd(@PathVariable int id, HttpServletRequest request, @AuthenticationPrincipal User user) {
        String ip = request.getRemoteAddr();
        String userAgent = request.getHeader("User-Agent");
        String username = (user != null) ? user.getUsername() : "ANONIM";
        return adService.getAd(id, ip, userAgent, username);
    }

    @PostMapping("/ads")
    public Ad addNewAd(@RequestBody Ad ad, @AuthenticationPrincipal User user, HttpServletRequest request) {
        String ip = request.getRemoteAddr();
        String userAgent = request.getHeader("User-Agent");
        String username = (user != null) ? user.getUsername() : "ANONIM";
        ad.setUser(user);
        ad.setApproved(false);
        ad.setPaid(false);
        adService.saveAd(ad, ip, userAgent, username);
        return ad;
    }

    @PutMapping("/ads")
    public Ad updateAd(@RequestBody Ad ad, HttpServletRequest request, @AuthenticationPrincipal User user) {
        String ip = request.getRemoteAddr();
        String userAgent = request.getHeader("User-Agent");
        String username = (user != null) ? user.getUsername() : "ANONIM";
        adService.saveAd(ad, ip, userAgent, username);
        return ad;
    }

    @PutMapping("/ads/{id}/approve")
    public void updateAd(@PathVariable int id, HttpServletRequest request, @AuthenticationPrincipal User user) {
        String ip = request.getRemoteAddr();
        String userAgent = request.getHeader("User-Agent");
        String username = (user != null) ? user.getUsername() : "ANONIM";
        adService.approveAd(id, ip, userAgent, username);
    }

    @PutMapping("/ads/{id}/pay")
    public void payAd(@PathVariable int id, HttpServletRequest request, @AuthenticationPrincipal User user) {
        String ip = request.getRemoteAddr();
        String userAgent = request.getHeader("User-Agent");
        String username = (user != null) ? user.getUsername() : "ANONIM";
        adService.payAd(id, ip, userAgent, username);
    }

    @DeleteMapping("/ads/{id}")
    public ResponseEntity<?> deleteAd(@PathVariable int id, @AuthenticationPrincipal User currentUser, HttpServletRequest request) {
        String ip = request.getRemoteAddr();
        String userAgent = request.getHeader("User-Agent");
        String username = (currentUser != null) ? currentUser.getUsername() : "ANONIM";
        adService.deleteAd(id, currentUser, ip, userAgent, username);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/ads/{id}/stats")
    public List<ZonedDateTime> getAdStats(@PathVariable int id, HttpServletRequest request, @AuthenticationPrincipal User user) {
        String ip = request.getRemoteAddr();
        String userAgent = request.getHeader("User-Agent");
        String username = (user != null) ? user.getUsername() : "ANONIM";
        return adService.getStats(id, ip, userAgent, username);
    }



    @GetMapping("/current-user")
    public String getCurrentUser(@AuthenticationPrincipal User user) {
        return "Current user: " + user.getUsername() + " current id: " + user.getId();
    }
}
