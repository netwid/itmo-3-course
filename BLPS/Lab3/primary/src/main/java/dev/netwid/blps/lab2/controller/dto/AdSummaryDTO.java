package dev.netwid.blps.lab2.controller.dto;

public class AdSummaryDTO {
    private int id;
    private String title;

    public AdSummaryDTO(int id, String title) {
        this.id = id;
        this.title = title;
    }

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }
}
