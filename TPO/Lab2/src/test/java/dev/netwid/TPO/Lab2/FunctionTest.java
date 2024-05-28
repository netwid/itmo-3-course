package dev.netwid.TPO.Lab2;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.mockito.Mock;
import org.mockito.Mockito;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class FunctionTest {
    final double PRECISION = 1e-9;

    @BeforeAll
    public static void init() {
        Csv.open("function.csv");
    }

    @AfterAll
    public static void close() {
        Csv.close();
    }

    @ParameterizedTest
    @CsvSource({
            // x, mockTan, mockLn, mockLog2, mockLog3, mockLog5, expected
            "0, 0, 0, 0, 0, 0, 0",
            "-0.5, -0.546302, 0, 0, 0, 0, -0.546302",
            "-1, -1.557407724654902, 0, 0, 0, 0, -1.557407724654902",
            "0.5, 0, -0.693147, -1, -0.630930, -0.430677, 0.0015123718730708855",
            "1, 0, 0, 0, 0, 0, NaN",
            "1.5, 0, 0.405465, 0.584963, 0.369070, 0.251930, 0.00006059312318933676",
            "2, 0, 0.6931471805599453, 1, 0.630929753571457, 0.430676558073393050, 0.001512382043315",
            "3, 0, 1.0986122886681098, 1.584962500721156, 1, 0.6826061944859854, 0.023975929970211",
            "5, -3.380515006246586, 1.6094379124341005, 2.321928094887362, 1.4649735207179271, 1, 0.237003146032050925"
    })
    public void functionTest(double x, double mockTan, double mockLn, double mockLog2, double mockLog3, double mockLog5, double expected) {
        Tan tan = Mockito.mock(Tan.class);
        Mockito.when(tan.calc(x)).thenReturn(mockTan);
        Mockito.doReturn(mockTan).when(tan).calc(x);
        Ln ln = Mockito.mock(Ln.class);
        Mockito.when(ln.calc(x)).thenReturn(mockLn);
        Log log2 = Mockito.mock(Log.class);
        Mockito.when(log2.calc(x)).thenReturn(mockLog2);
        Log log3 = Mockito.mock(Log.class);
        Mockito.when(log3.calc(x)).thenReturn(mockLog3);
        Log log5 = Mockito.mock(Log.class);
        Mockito.when(log5.calc(x)).thenReturn(mockLog5);

        Function function = new Function(tan, ln, log2, log3, log5);
        assertEquals(expected, function.calc(x), PRECISION);
    }
}
