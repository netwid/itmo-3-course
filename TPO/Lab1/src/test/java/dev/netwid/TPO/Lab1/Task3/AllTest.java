package dev.netwid.TPO.Lab1.Task3;

import dev.netwid.TPO.Lab1.Task3.creatures.Creature;
import dev.netwid.TPO.Lab1.Task3.creatures.Human;
import org.junit.jupiter.api.*;

import java.util.Arrays;
import java.util.List;

public class AllTest {
    @Nested
    class Trivial {
        @Test
        @DisplayName("Engine states")
        void states() {
            Engine engine = new Engine();
            Assertions.assertEquals(engine.getState(), State.UNKNOWN);

            engine.start();
            Assertions.assertEquals(engine.getState(), State.STARTED);

            engine.finish();
            Assertions.assertEquals(engine.getState(), State.FINISHED);
        }
    }

    @Nested
    class SpaceTest {
        private Space space;

        @BeforeEach
        void init() {
            this.space = new Space();
        }

        @Test
        @DisplayName("Empty space")
        void empty() {
            Assertions.assertIterableEquals(space.viewStars(), List.of());
        }

        @Test
        @DisplayName("Space stars")
        void stars() {
            Star a = new Star();
            Star b = new Star();
            Star c = new Star();

            space.addStar(a);
            space.addStar(b);
            space.addStar(c);

            Assertions.assertIterableEquals(space.viewStars(), Arrays.asList(a, b, c));
        }
    }

    @Nested
    class AirlockTest {
        private Engine engine;
        private Airlock airlock;

        @BeforeEach
        void init() {
            this.engine = new Engine();
            this.airlock = new Airlock(this.engine);
        }

        @Test
        @DisplayName("empty")
        void empty() {
            Assertions.assertIterableEquals(airlock.throwCreatures(), List.of());
        }

        @Test
        @DisplayName("engine")
        void engine() {
            Assertions.assertEquals(engine.getState(), State.UNKNOWN);
        }

        @Test
        @DisplayName("Airlock with creatures")
        void creatures() {
            Creature Ford = new Human("Ford");
            Creature Artur = new Human("Artur");

            airlock.lockCreature(Ford);
            airlock.lockCreature(Artur);

            Assertions.assertIterableEquals(airlock.throwCreatures().stream().map(Creature::getName).toList(), Arrays.asList("Ford", "Artur"));
            Assertions.assertEquals(engine.getState(), State.FINISHED);
        }
    }
}
