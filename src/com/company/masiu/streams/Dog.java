package com.company.masiu.streams;

public class Dog {

  private final String name;
  private final int age;
  private  final String breed;

  public Dog(String name, int age, String breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }

  public String getName() {
    return name;
  }

  public int getAge() {
    return age;
  }

  public String getBreed() {
    return breed;
  }
}
