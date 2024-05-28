package dev.netwid.TPO.Lab2;

import java.io.FileWriter;
import java.io.IOException;
import java.io.Writer;

public class Csv {
    private static FileWriter w;

    static void open(String filename) {
        try {
            w = new FileWriter(filename);
            w.append("Function, X, Result\n");
        } catch (IOException e) {
            System.out.println("Can't open file: " + e.getMessage());
        }
    }

    public static void write(String func, double x, double res) {
        if (w == null) {
            System.out.println("Open file first");
        }
        try {
            w.append(func + "," + x + "," + res + "\n");
        } catch (IOException e) {
            System.out.println("Ошибка записи в файл: " + e.getMessage());
        }
    }

    static void close() {
        if (w != null) {
            try {
                w.flush();
                w.close();
            } catch (IOException e) {
                System.out.println("Can't close file: " + e.getMessage());
            }
        }
    }
}
