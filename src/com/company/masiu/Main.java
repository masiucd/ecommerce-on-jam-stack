package com.company.masiu;

import java.util.Arrays;

import com.company.masiu.collections.xs.MyList;

public class Main {

  public static void main(String[] args) {

    MyList m = new MyList();
    m.showHeavyStuff();
  }

  public static <T> void print(T a) {
    System.out.println(a);
  }

  public static <T> void printList(T[] xs) {
    System.out.println(Arrays.toString(xs));
  }
}