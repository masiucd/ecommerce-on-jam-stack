package com.company.masiu.algo;

import java.util.Arrays;

public class AlgoDemo {

  public static void main(String[] args) {
    Algo algo = new Algo();

    int[] nums = {1, 2, 4, 5, 6, 7, 8, 9};
    int[] res = algo.sortedSquaredArray(nums);
    printList(res);

  }

  private static <T> void print(T value) {
    System.out.println(value);
  }

  private static  void printList(int[] value) {
    System.out.println(Arrays.toString(value));
  }
}
