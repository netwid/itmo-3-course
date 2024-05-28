package dev.netwid.TPO.Lab1.Task3;

enum State {
    UNKNOWN,
    STARTED,
    FINISHED
}

public class Engine {
    private State state = State.UNKNOWN;

    public void start() {
        state = State.STARTED;
    }

    public void finish() {
        state = State.FINISHED;
    }

    public State getState() {
        return this.state;
    }
}
