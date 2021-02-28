package com.company.masiu;

import java.util.ArrayList;
import java.util.Arrays;

public class Main {

  private static void printXs(int[] xs) {
    Arrays.stream(xs).forEach(s -> System.out.println(s));
  }

  static int[] even(int[] xs) {

    return Arrays.stream(xs).filter(n -> n % 2 == 0).toArray();
  }

  public static void main(String[] args) {
    Math m = new Math(10, 20);
    System.out.println(m);
    Algo algo = new Algo();

    String revString = algo.reverseString("hello");
    print(revString);

    int[] xs = {9, 2, 1, -2};
    int[] res = algo.bubbleSort(xs);

    print(res);
  }

  public static <T> void print(T val) {

    System.out.println(val);
  }

  static int addition(int a, int b) {
    return a + b;
  }

  static int sumList(int[] xs) {
    int res = 0;
    for (int x : xs) {
      res += x;
    }
    return res;
  }

  static int sumWithForEach(int[] xs) {
    int res = Arrays.stream(xs).sum();
    return res;
  }

  static void mutateInt(int x, int target) {
    x = target;
  }

  static void swap(int a, int b) {
    int temp = a;
    a = b;
    b = temp;
  }
}
