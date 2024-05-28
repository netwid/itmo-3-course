package dev.netwid.TPO.Lab1.Task1;

public class Sin {
    public static double calc(double x, int terms) {
        x = x % (2 * Math.PI);
        double term = x;
        double sum = term;

        for (int i = 1; i < terms; i++) {
            term *= (-1) * x * x / ((2 * i) * (2 * i + 1));
            sum += term;
        }

        return sum;
    }
}