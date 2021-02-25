package com.company.masiu;

public class Animal {

  private final String name;
  private String animalType;
  private int legs;

  public Animal(String name, String animalType, int legs) {
    this.name = name;
    this.animalType = animalType;
    this.legs = legs;
  }

  public int getLegs() {
    return this.legs;
  }

  public String myName() {
    return this.name;
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

