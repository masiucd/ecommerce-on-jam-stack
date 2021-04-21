package com.company.masiu.algo;

import java.util.Arrays;

public class AlgoDemo {

  public static void main(String[] args) {
    Algo algo = new Algo();

    int[] reds = {5, 5, 3, 9, 2};
    int[] blues = {3, 6, 7, 2, 1};
    boolean fastes = true;

    int res = algo.tandemBicycle(reds, blues, fastes);
    print(res);
  }

  private static <T> void print(T value) {
    System.out.println(value);
  }

  private static void printList(int[] value) {
    System.out.println(Arrays.toString(value));
  }
}
