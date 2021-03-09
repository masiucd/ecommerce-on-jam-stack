package com.company.masiu;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Random;

public class Animal {

  private static String hiddenName;
  private final String name;
  private String animalType;
  private int legs;

  public Animal(String name, String animalType, int legs) {
    this.name = name;
    this.animalType = animalType;
    this.legs = legs;
    hiddenName = "Animal";
  }

  public int getLegs() {
    return this.legs;
  }

  public String myName() {
    return this.name;
  }

  static void greet() {
    System.out.println("Hello I am a " + hiddenName + " and this is a static method!");
  }

  @Override
  public String toString() {
    return "Animal{" +
           "name='" + name + '\'' +
           ", animalType='" + animalType + '\'' +
           ", legs=" + legs +
           '}';
  }
}

