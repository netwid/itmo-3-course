package dev.netwid.TPO.Lab1.Task3;

import dev.netwid.TPO.Lab1.Task3.creatures.Creature;

import java.util.ArrayList;
import java.util.List;

public class Airlock {
    Engine engine;
    List<Creature> creatures = new ArrayList<>();

    public Airlock(Engine engine) {
        this.engine = engine;
    }

    public void lockCreature(Creature creature) {
        creatures.add(creature);
    }

    public List<Creature> throwCreatures() {
        engine.start();
        List<Creature> temp = creatures;
        creatures = null;
        engine.finish();
        return temp;
    }
}
