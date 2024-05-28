package dev.netwid.TPO.Lab1.Task3.creatures;

import lombok.Data;

@Data
public class Creature {
    private String name;

    public Creature(String name) {
        this.name = name;
    }
}
