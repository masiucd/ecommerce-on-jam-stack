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

    Flight f1 = new Flight(150);
    Flight f2 = new Flight(150);

    print(f1.toString());
    f2 = f1;
    f2.addPassenger(100);
    print(f1.toString());
    print(f2.toString());
  }

  public static <T> void print(T a) {
    System.out.println(a);
  }
}