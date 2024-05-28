package dev.netwid.TPO.Lab2;

public class Function {
    private final Tan tan;
    private final Ln ln;
    private final Log log2;
    private final Log log3;
    private final Log log5;

    public Function() {
        this.tan = new Tan();
        this.ln = new Ln();
        this.log2 = new Log(2);
        this.log3 = new Log(3);
        this.log5 = new Log(5);
    }

    public Function(Tan tan, Ln ln, Log log2, Log log3, Log log5) {
        this.tan = tan;
        this.ln = ln;
        this.log2 = log2;
        this.log3 = log3;
        this.log5 = log5;
    }

    public double calc(double x) {
        double result;
        if (x <= 0) {
            result = tan.calc(x);
        } else {
            double denominator = Math.pow(log2.calc(x), 3);
            if (denominator == 0) {
                result = Double.NaN;
            } else {
                result = Math.pow((ln.calc(x) - log5.calc(x)) * ln.calc(x) * log3.calc(x), 3) / denominator;
            }
        }

        Csv.write("function", x, result);
        return result;
    }
}
