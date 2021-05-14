package com.company.masiu.flights;

public class Person implements Passenger {

  private String name;
  private int age;
  private int amountOfBags;

  public Person(String name, int age, int amountOfBags) {
    this.name = name;
    this.age = age;
    this.amountOfBags = amountOfBags;
  }

  public Person(String name, int age) {
    this.name = name;
    this.age = age;
    this.amountOfBags = 0;
  }

  public Person(String name) {
    this.name = name;
    this.age = 0;
    this.amountOfBags = 0;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public int getAge() {
    return age;
  }

  public void setAge(int age) {
    this.age = age;
  }

  public int getAmountOfBags() {
    return amountOfBags;
  }

  public void setAmountOfBags(int amountOfBags) {
    this.amountOfBags = amountOfBags;
  }
}
