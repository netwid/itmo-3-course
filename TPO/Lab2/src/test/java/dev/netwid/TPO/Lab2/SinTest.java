package dev.netwid.TPO.Lab2;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;


public class SinTest {
    final double PRECISION = 1e-9;

    @BeforeAll
    public static void init() {
        Csv.open("sin.csv");
    }

    @AfterAll
    public static void close() {
        Csv.close();
    }

    @ParameterizedTest
    @CsvSource({
            "0.0, 0.0",
            "0.7853981633974483, 0.7071067811865475",
            "1.5707963267948966, 1.0",
            "3.141592653589793, 0.0",
            "4.71238898038469, -1.0",
            "6.283185307179586, 0.0",
            "-0.7853981633974483, -0.7071067811865475",
            "-1.5707963267948966, -1.0",
            "-3.141592653589793, 0.0",
            "-4.71238898038469, 1.0",
            "-6.283185307179586, 0.0",
            "1000000.0, -0.34999350217129294"
    })
    public void sinTest(double x, double expected) {
        Sin sin = new Sin();
        assertEquals(expected, sin.calc(x), PRECISION);
    }
}
