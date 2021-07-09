package com.company.masiu.family;

abstract public class Person implements Human {

  private int age;
  private String name;

  public Person(int age, String name) {
    this.age = age;
    this.name = name;
  }

  @Override
  public int getAge() {
    return this.age;
  }

  @Override
  public void birthday() {
  }

  public String getName() {
    return name;
  }
}
