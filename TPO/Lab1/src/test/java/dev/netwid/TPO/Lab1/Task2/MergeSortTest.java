package dev.netwid.TPO.Lab1.Task2;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class MergeSortTest {
    @Test
    @DisplayName("Check positive values")
    void checkSorting() {
        assertAll(
                () -> assertArrayEquals(new int[]{2, 7, 18, 29}, MergeSort.sort(new int[]{29, 2, 7, 18})),
                () -> assertArrayEquals(new int[]{5, 6, 13, 45, 78}, MergeSort.sort(new int[]{13, 5, 6, 78, 45})),
                () -> assertArrayEquals(new int[]{11, 12, 13, 14, 15, 16, 17, 18, 19, 20}, MergeSort.sort(new int[]{20, 19, 18, 17, 16, 15, 14, 13, 12, 11}))
        );
    }

    @Test
    @DisplayName("Check empty")
    void checkEmpty() {
        assertArrayEquals(new int[]{}, MergeSort.sort(new int[]{}));
    }

    @Test
    @DisplayName("Check negative values")
    void checkNegativeValues() {
        assertArrayEquals(new int[]{-5, -4, -3, -2, -1}, MergeSort.sort(new int[]{-5, -1, -4, -3, -2}));
    }

    @Test
    @DisplayName("Check same values")
    void checkSameValues() {
        assertArrayEquals(new int[]{-100, -100, -1, -1, 0, 0, 1, 1, 100, 100}, MergeSort.sort(new int[]{-100, 1, -1, 0, 0, 100, 1, -1, 100, -100}));
    }

    @Test
    @DisplayName("Check zeros")
    void checkZeros() {
        assertArrayEquals(new int[]{0,0,0,0,0}, MergeSort.sort(new int[]{0,0,0,0,0}));
    }

    @Test
    @DisplayName("Check null")
    void checkNull() {
        assertThrows(NullPointerException.class, () -> MergeSort.sort(null));
    }
}