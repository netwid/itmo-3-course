package dev.netwid.TPO.Lab1.Task2;

public class MergeSort {
    public static int[] sort(int[] arr) {
        if (arr == null) {
            throw new NullPointerException();
        }

        mergeSort(arr);
        return arr;
    }

    private static void mergeSort(int[] a) {
        if (a.length < 2) {
            return;
        }
        int mid = a.length / 2;
        int[] l = new int[mid];
        int[] r = new int[a.length - mid];

        System.arraycopy(a, 0, l, 0, mid);
        if (a.length - mid >= 0) {
            System.arraycopy(a, mid, r, 0, a.length - mid);
        }
        mergeSort(l);
        mergeSort(r);

        merge(a, l, r);
    }

    private static void merge(int[] a, int[] l, int[] r) {

        int i = 0, j = 0, k = 0;
        while (i < l.length && j < r.length) {
            if (l[i] <= r[j]) {
                a[k++] = l[i++];
            }
            else {
                a[k++] = r[j++];
            }
        }
        while (i < l.length) {
            a[k++] = l[i++];
        }
        while (j < r.length) {
            a[k++] = r[j++];
        }
    }
}
