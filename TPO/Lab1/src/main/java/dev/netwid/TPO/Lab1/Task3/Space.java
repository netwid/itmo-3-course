package dev.netwid.TPO.Lab1.Task3;

import java.util.ArrayList;
import java.util.List;

public class Space {
    List<Star> stars = new ArrayList<>();

    public void addStar(Star star) {
        stars.add(star);
    }

    public List<Star> viewStars() {
        return stars;
    }
}
