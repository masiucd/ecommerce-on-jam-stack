package com.company.masiu;

import java.util.Arrays;

import com.company.masiu.interfaces.FpStuff;

public class Basic {
  private static void handleCommandLine(String[] args) {
    char opCode = args[0].charAt(0);
    double leftVal = Double.parseDouble(args[1]);
    double rightVal = Double.parseDouble(args[2]);

    double result = execute(opCode, leftVal, rightVal);
  }

  private static double execute(char opCode, double leftVal, double rightVal) {
    return 2321312;
  }

  // passing function as param
  public static void invoke(FpStuff call, int param) {
    call.call(param);
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

  private static void printXs(int[] xs) {
    Arrays.stream(xs).forEach(s -> System.out.println(s));
  }

  static int[] even(int[] xs) {

    return Arrays.stream(xs).filter(n -> n % 2 == 0).toArray();
  }


}
