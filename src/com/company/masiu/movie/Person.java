package com.company.masiu.movie;

public class Person {

  String name;
  int age;
  int money;

  public Person(String name, int age, int money) {
    this.name = name;
    this.age = age;
    this.money = money;
  }

  public String getName() {
    return name;
  }

  public int getAge() {
    return age;
  }

  public int getMoney() {
    return money;
  }

  @Override
  public String toString() {
    return "Person{" +
           "name='" + name + '\'' +
           ", age=" + age +
           ", money=" + money +
           '}';
  }
}
