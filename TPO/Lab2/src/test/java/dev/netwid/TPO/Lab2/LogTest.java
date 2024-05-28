package dev.netwid.TPO.Lab2;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.mockito.Mockito;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class LogTest {
    final double PRECISION = 1e-5;

    @BeforeAll
    public static void init() {
        Csv.open("log.csv");
    }

    @AfterAll
    public static void close() {
        Csv.close();
    }

    @ParameterizedTest
    @CsvSource({
            "-1, NaN, NaN",
            "0, NaN, NaN",
            "0.5, -0.693147, -1.0",
            "1.0, 0.0, 0.0",
            "2.0, 0.6931471805599453, 1.0",
            "3.0, 1.0986122886681098, 1.584962500721156",
            "4.0, 1.3862943611198906, 2.0",
            "8.0, 2.0794415416798359, 3.0"
    })
    public void log2Test(double x, double mockLn, double expected) {
        Ln ln = Mockito.mock(Ln.class);
        Mockito.when(ln.calc(x)).thenReturn(mockLn);
        Mockito.when(ln.calc(2)).thenReturn(0.693147180559945309417);

        Log log2 = new Log(2, ln);
        assertEquals(expected, log2.calc(x), PRECISION);
    }

    @ParameterizedTest
    @CsvSource({
            "-1, NaN, NaN",
            "0, NaN, NaN",
            "0.5, -0.693147, -0.630930",
            "1.0, 0.0, 0.0",
            "2.0, 0.6931471805599453, 0.6309297535714574",
            "3.0, 1.0986122886681098, 1.0",
            "4.0, 1.3862943611198906, 1.2618595071429148",
            "8.0, 2.0794415416798359, 1.8927892607143723"
    })
    public void log3Test(double x, double mockLn, double expected) {
        Ln ln = Mockito.mock(Ln.class);
        Mockito.when(ln.calc(x)).thenReturn(mockLn);
        Mockito.when(ln.calc(3)).thenReturn(1.09861228866810969);

        Log log3 = new Log(3, ln);
        assertEquals(expected, log3.calc(x), PRECISION);
    }

    @ParameterizedTest
    @CsvSource({
            "-1, NaN, NaN",
            "0, NaN, NaN",
            "0.5, -0.693147, -0.430677",
            "1.0, 0.0, 0.0",
            "2.0, 0.6931471805599453, 0.43067655807339306",
            "3.0, 1.0986122886681098, 0.6826061944859854",
            "4.0, 1.3862943611198906, 0.8613531161467861",
            "8.0, 2.0794415416798359, 1.29202967422017915"
    })
    public void log5Test(double x, double mockLn, double expected) {
        Ln ln = Mockito.mock(Ln.class);
        Mockito.when(ln.calc(x)).thenReturn(mockLn);
        Mockito.when(ln.calc(5)).thenReturn(1.60943791243410037460);

        Log log5 = new Log(5, ln);
        assertEquals(expected, log5.calc(x), PRECISION);
    }
}
