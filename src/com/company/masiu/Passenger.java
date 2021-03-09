package com.company.masiu;

public class Passenger {

  String name;
  int age;
  int checkedBags;

  public Passenger(String name, int age, int checkedBags) {
    this.name = name;
    this.age = age;
    this.checkedBags = checkedBags;
  }

  public String getName() {
    return name;
  }

  public int getAge() {
    return age;
  }

  @Override
  public String toString() {
    return "Passenger{" +
           "name='" + name + '\'' +
           ", age=" + age +
           '}';
  }
}
