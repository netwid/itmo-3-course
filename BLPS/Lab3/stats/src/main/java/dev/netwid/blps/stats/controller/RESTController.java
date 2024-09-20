package dev.netwid.blps.stats.controller;

import dev.netwid.blps.stats.primary.entity.AdStats;
import dev.netwid.blps.stats.service.StatsService;
import lombok.AllArgsConstructor;
import org.apache.kafka.common.protocol.types.Field;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@AllArgsConstructor
public class RESTController {
    private StatsService statsService;

    @GetMapping("/ad_stats/{id}")
    public List<AdStats> getStats(@PathVariable int id) {
        return statsService.getAd(id);
    }

    @GetMapping("/test")
    public String test() {
        return "Test";
    }
}
