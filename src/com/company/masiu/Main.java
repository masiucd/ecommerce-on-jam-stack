package com.company.masiu;

import java.awt.List;
import java.sql.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class Main {

  public static void main(String[] args) {
    int a = 1, b = 22, c = 21312321;

    String p = String.format("W:%04d  X:%04d", a, b);
    String p2 = String.format("W:%-4d  X:%-4d", a, b);
    String p3 = String.format("%,d", c);
    print(p);
    print(p2);
    print(p3);

    Fp fp = new Fp();
    ArrayList<String> xs = new ArrayList<String>();
    xs.add("1");
    xs.add("2");
    xs.add("3");
    xs.add("4");

    ArrayList<Integer> integerList = fp.stringToIntList(xs);
    int sum = fp.sumIntList(integerList);
    print(sum);
    print(xs);
  }

  public static <T> void print(T a) {
    System.out.println(a);
  }

  public static void intToHex(int n) {
    String s = String.format("%#x", n);
    String sS = String.format("%#X", n);
    System.out.println(s);
    System.out.println(sS);
  }
}