package dev.netwid.TPO.Lab2;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.mockito.Mockito;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CosTest {
    final double PRECISION = 1e-9;

    @BeforeAll
    public static void init() {
        Csv.open("cos.csv");
    }

    @AfterAll
    public static void close() {
        Csv.close();
    }

    @ParameterizedTest
    @CsvSource({
            "0.0, 0.0, 1.0",
            "1.5707963267948966, 1.0, 6.123233995736766E-17",
            "3.141592653589793, 0, -1.0",
            "4.71238898038469, -1.0, -1.8369701987210297E-16",
            "6.283185307179586, 0, 1.0",
            "1.0, 0.8414709848078965, 0.5403023058681398",
            "2.0, 0.9092974268256817, -0.4161468365471424",
            "3.0, 0.1411200080598672, -0.9899924966004454",
            "4.0, -0.7568024953079282, -0.6536436208636119",
            "1000000.0, -0.34999350217129294, 0.9367521275331447",
            "-1000000.0, 0.34999350217129294, 0.9367521275331447",
            "-1.0, -0.8414709848078965, 0.5403023058681398",
            "-2.0, -0.9092974268256817, -0.4161468365471424",
            "-1.5707963267948966, -1.0, 6.123233995736766E-17",
            "-3.141592653589793, 0, -1.0",
    })
    public void cosTest(double x, double mockSin, double expected) {
        Sin sin = Mockito.mock(Sin.class);
        Mockito.when(sin.calc(x)).thenReturn(mockSin);

        Cos cos = new Cos(sin);
        assertEquals(expected, cos.calc(x), PRECISION);
    }
}
