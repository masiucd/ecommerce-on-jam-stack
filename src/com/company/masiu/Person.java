package com.company.masiu;

public class Person {

  private final String name;
  private int age;

  public Person(String name, int age) {
    this.name = name;
    this.age = age;
  }

  public String greet() {
    return "hello my name is " + this.name;
  }

  public void birthday() {
    this.age++;
  }

  @Override
  public String toString() {
    return "Person{" +
           "name='" + name + '\'' +
           ", age=" + age +
           '}';
  }
}
