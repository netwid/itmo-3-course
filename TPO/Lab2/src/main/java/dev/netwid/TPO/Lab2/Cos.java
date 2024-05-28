package dev.netwid.TPO.Lab2;

public class Cos {
    private final Sin sin;

    public Cos() {
        this.sin = new Sin();
    }

    public Cos(Sin sin) {
        this.sin = sin;
    }

    public double calc(double x) {
        double s = sin.calc(x);
        double cos = Math.sqrt(1 - s * s);
        if ((x > Math.PI / 2 && x < Math.PI * 3 / 2) ||
                x < -Math.PI / 2 && x > -Math.PI * 3 / 2) {
            cos = -cos;
        }

        Csv.write("cos", x, cos);

        return cos;
    }
}
