package com.company.masiu;

import java.util.ArrayList;
import java.util.stream.Collectors;

import com.company.masiu.interfaces.FpStuff;

public class Fp implements FpStuff {

  ArrayList<Integer> doubleList(ArrayList<Integer> xs) {
    return (ArrayList<Integer>) xs.stream().map(x -> x * 2).collect(Collectors.toList());
  }

  ArrayList<Integer> stringToIntList(ArrayList<String> xs) {
    return (ArrayList<Integer>) xs.stream().map(n -> Integer.valueOf(n)).collect(Collectors.toList());
  }

  int sumIntList(ArrayList<Integer> xs) {
    return xs.stream().reduce(0, (subtotal, element) -> subtotal + element);
  }

  @Override
  public void call(int param) {
    System.out.println(param);
  }
}
