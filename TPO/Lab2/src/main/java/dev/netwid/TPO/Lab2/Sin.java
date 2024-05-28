package dev.netwid.TPO.Lab2;

public class Sin {
    private int terms = 100;

    public Sin() {
    }

    public Sin(int terms) {
        this.terms = terms;
    }

    public double calc(double x) {

        x = x % (2 * Math.PI);
        double term = x;
        double sum = term;

        for (int i = 1; i < terms; i++) {
            term *= (-1) * x * x / ((2 * i) * (2 * i + 1));
            sum += term;
        }

        Csv.write("sin", x, sum);
        return sum;
    }
}
