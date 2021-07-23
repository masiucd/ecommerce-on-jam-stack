package com.company.masiu.fp;

import java.util.Optional;

import com.company.masiu.Print;

public class App {

  public static void main(String[] args) {

    Optional<Object> x = Optional.empty();
    Optional<String> hello = Optional.of("Ola");
    Optional<String> f = Optional.ofNullable("lol");
    Optional<String> someSteing = Optional.of("legia warszawa");

    String res = someSteing.map(String::toUpperCase).orElseGet(() -> "Something else");

    checkIfEmpty(x);
    checkIfEmpty(hello);

    checkIfPresent(x);
    checkIfPresent(hello);

    Print.print(res);
  }

  public static <T> void checkIfEmpty(Optional<T> value) {
    Print.print("Value " + value.orElse((T) "empty") + " is empty = " + (value.isEmpty() ? "Yes" : "No"));
  }

  public static <T> void checkIfPresent(Optional<T> value) {
    Print.print("Value " + value.orElse((T) "empty") + " is present = " + (value.isPresent() ? "Yes" : "No"));
  }
}
