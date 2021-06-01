package com.company.masiu.sandbox;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class Fp {

  private final Predicate<Integer> overFive;
  private final Predicate<String> below5Chars;
  private final List<Integer> numbers;

  public Fp() {
    this.overFive = n -> n > 5;
    this.numbers = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    this.below5Chars = word -> word.length() < 5;
  }

  public Fp(Predicate<Integer> overFive) {
    this.overFive = overFive;
    this.numbers = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    this.below5Chars = word -> word.length() < 5;
  }

  public Predicate<Integer> getOverFive() {
    return overFive;
  }

  public List<Integer> getNumbers() {
    return numbers;
  }

  public List<Integer> listGreaterThenPredicate(Predicate<Integer> predicate) {
    return getNumbers().stream().filter(predicate).collect(Collectors.toList());
  }

  public <T> void printList(List<T> numbersList) {
    numbersList.forEach(System.out::println);
  }

  public Predicate<String> getBelow5Chars() {
    return below5Chars;
  }

  public List<String> makeWordList() {
    List<String> list = new ArrayList<>();
    list.add("hello");
    list.add("world");
    list.add("Legia");
    list.add("Warszawa");
    list.add("CWKS");
    list.add("1916");
    return list;
  }
}
