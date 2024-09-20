package dev.netwid.blps.lab2.service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.kafka.clients.admin.Admin;
import org.apache.kafka.clients.admin.NewTopic;
import org.apache.kafka.clients.admin.CreateTopicsResult;
import org.apache.kafka.clients.producer.Producer;
import org.apache.kafka.clients.producer.ProducerRecord;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.concurrent.ExecutionException;

@Slf4j
@Service
@AllArgsConstructor
public class KafkaService {

    private final Producer<String, Object> kafkaProducer;
    private final Admin admin;
    private final List<NewTopic> topics;

    @EventListener(ContextRefreshedEvent.class)
    private void createTopics() {
        log.info("Starting the topic creation process.");
        try {
            CreateTopicsResult result = admin.createTopics(topics);
            result.values().forEach((topicName, future) -> {
                try {
                    future.get();
                    log.info("Successfully created topic: {}", topicName);
                } catch (ExecutionException | InterruptedException excp) {
                    log.warn("Failed to create topic '{}': {}", topicName, excp.getMessage());
                }
            });
        } catch (Exception excp) {
            log.error("Topic creation process failed: {}", excp.getMessage(), excp);
        }
    }

    public void send(String topicName, String key, Object value) {
        try {
            log.info("Sending message to topic '{}'. Key: {}, Value: {}", topicName, key, value);
            kafkaProducer.send(new ProducerRecord<>(topicName, key, value));
            kafkaProducer.flush();  // Ensure that the message is sent immediately
            log.info("Message successfully sent to topic '{}'. Key: {}, Value: {}", topicName, key, value);
        } catch (Exception excp) {
            log.error("Failed to send message to topic '{}': {}", topicName, excp.getMessage(), excp);
        } finally {
            kafkaProducer.close();  // Optionally close the producer after the message is sent
        }
    }
}
