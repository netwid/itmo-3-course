package dev.netwid.blps.lab2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@EnableTransactionManagement
public class Lab2Application {
    public static void main(String[] args) {
        SpringApplication.run(Lab2Application.class, args);
    }
}
