package com.company.masiu.family;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.company.masiu.Print;

public class App {

  public static void main(String[] args) {

    Father bob = new Father(45, "Bob");
    Father logan = new Father(75, "Logan");

    List<Father> fathers = new ArrayList<>();
    fathers.add(bob);
    fathers.add(logan);

    List<String> fathersToUpper = fathers.stream().map(father -> father.getName().toUpperCase()).collect(Collectors.toList());
    fathersToUpper.forEach(x -> Print.print(x));
  }
}
