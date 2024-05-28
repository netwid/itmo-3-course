package dev.netwid.TPO.Lab2;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class LnTest {
    final double PRECISION = 1e-9;

    @BeforeAll
    public static void init() {
        Csv.open("ln.csv");
    }

    @AfterAll
    public static void close() {
        Csv.close();
    }

    @ParameterizedTest
    @CsvSource({
            "-1, NaN",
            "0.0, NaN",
            "0.1, -2.3025850929940455",
            "0.5, -0.6931471805599453",
            "1, 0.0",
            "2, 0.6931471805599453",
            "10, 2.302585092994045"
    })
    public void lnTest(double x, double expected) {
        Ln ln = new Ln();
        assertEquals(expected, ln.calc(x), PRECISION);
    }
}
