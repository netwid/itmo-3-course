package dev.netwid.TPO.Lab2;

public class Log {
    private final int base;
    private final Ln ln;

    public Log(int base) {
        this.base = base;
        this.ln = new Ln();
    }

    public Log(int base, Ln ln) {
        this.base = base;
        this.ln = ln;
    }

    public double calc(double x) {
        double result;
        if (base <= 0 || x <= 0 || base == 1) {
            result = Double.NaN;
        } else {
            result = ln.calc(x) / ln.calc(base);
        }
        Csv.write("log" + base, x, result);
        return result;
    }
}
