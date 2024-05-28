package dev.netwid.TPO.Lab2;

public class Tan {
    private final Sin sin;
    private final Cos cos;

    public Tan() {
        this.sin = new Sin();
        this.cos = new Cos();
    }

    public Tan(Sin sin, Cos cos) {
        this.sin = sin;
        this.cos = cos;
    }

    public double calc(double x) {
        double result;
        double denominator = this.cos.calc(x);

        if (denominator == 0) {
            result = Double.NaN;
        } else {
            result = this.sin.calc(x) / denominator;
        }

        Csv.write("tan", x, result);
        return result;
    }
}
