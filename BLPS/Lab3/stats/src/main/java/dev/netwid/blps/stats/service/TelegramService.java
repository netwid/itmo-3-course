package dev.netwid.blps.stats.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.HashMap;
import java.util.Map;

@Service
public class TelegramService {
    private final RestTemplate restTemplate = new RestTemplate();

    @Value("${telegram.bot.token}")
    private String telegramBotToken;

    @Value("${telegram.user.id}")
    private String telegramUserId;

    public void sendMessage(String message) {
        String url = String.format("https://api.telegram.org/bot%s/sendMessage", telegramBotToken);
        
        // Формируем тело запроса
        Map<String, String> requestBody = new HashMap<>();
        requestBody.put("chat_id", telegramUserId);
        requestBody.put("text", message);
        
        // Создаем HttpEntity с телом запроса и заголовками
        HttpEntity<Map<String, String>> entity = new HttpEntity<>(requestBody);

        // Выполняем POST-запрос
        restTemplate.postForObject(url, entity, String.class);
    }
}
