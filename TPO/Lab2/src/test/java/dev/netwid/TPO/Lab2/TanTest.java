package dev.netwid.TPO.Lab2;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.mockito.Mockito;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class TanTest {
    final double PRECISION = 1e-5;

    @BeforeAll
    public static void init() {
        Csv.open("tan.csv");
    }

    @AfterAll
    public static void close() {
        Csv.close();
    }

    @ParameterizedTest
    @CsvSource({
            "0.0, 0.0, 1.0, 0.0",
            "0.7853981633974483, 0.7071067811865475, 0.7071067811865476, 1.0",
            "-0.7853981633974483, -0.7071067811865475, 0.7071067811865476, -1.0",
            "1.5707963267948966, 1.0, 0.0, NaN",
            "2.356194490192345, -0.7071067811865477, -0.7071067811865475, 1.0",
            "3.141592653589793, 0.0, -1.0, 0.0",
            "4.71238898038469, -1.0, 0.0, NaN",
            "0.5, 0.479426, 0.8775826, 0.546303",
            "-0.5, -0.479426, 0.8775826, -0.546303"
    })
    public void tanTest(double x, double mockSin, double mockCos, double expected) {
        Sin sin = Mockito.mock(Sin.class);
        Mockito.when(sin.calc(x)).thenReturn(mockSin);

        Cos cos = Mockito.mock(Cos.class);
        Mockito.when(cos.calc(x)).thenReturn(mockCos);

        Tan tan = new Tan(sin, cos);
        assertEquals(expected, tan.calc(x), PRECISION);
    }
}
