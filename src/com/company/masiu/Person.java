package com.company.masiu;

import java.util.Objects;

public class Person {

  private String firstName;
  private String lastName;
  private int age;

  public Person(String firstName, String lastName, int age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  public String greet() {
    String formatGreet = String.format(
      "Hi there my name is %s %s and I am %d years old",
      this.firstName, this.lastName, this.age);
    return formatGreet;
  }

  public void birthday() {
    this.age++;
  }

  public String getFirstName() {
    return firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public int getAge() {
    return age;
  }

  public void getMarried(String newLastName) {

    if (newLastName.equals("")) {
      return;
    } else {
      this.lastName = newLastName;
    }
  }

  @Override
  public String toString() {
    return "Person{" +
           "firstName='" + firstName + '\'' +
           ", lastName='" + lastName + '\'' +
           ", age=" + age +
           '}';
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    Person person = (Person) o;
    return age == person.age && Objects.equals(firstName, person.firstName) && Objects.equals(lastName, person.lastName);
  }

  @Override
  public int hashCode() {
    return Objects.hash(firstName, lastName, age);
  }
}
