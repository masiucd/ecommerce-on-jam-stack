package com.company.masiu;

import java.awt.List;
import java.sql.Array;
import java.time.Instant;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class Main {

  public static void main(String[] args) {
    int a = 2, b = 22, c = 212;

//    Labeled arguments
    String s1 = String.format("%3$d, %2$d, %1$d", c, a, b);

    print(s1);

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

    Time t = new Time();
    t.now();
    t.parseToUseData();
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