package com.company.masiu.sandbox;

import java.util.List;
import java.util.stream.Collectors;

import com.company.masiu.Print;

public class App {

  public static void main(String[] args) {
    Person p = Person.from("Frank", "smith");

    Print.print(p.getFirstName());
    Print.print(p.getLastName());
  }
}
