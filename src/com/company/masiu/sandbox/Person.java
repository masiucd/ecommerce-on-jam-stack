package com.company.masiu.sandbox;

public class Person {

  private final String firstName;
  private final String lastName;

  private Person(String firstName, String lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public static Person from(String firstName, String lastName) {
    return new Person(firstName, lastName);
  }

  public String getFirstName() {
    return firstName;
  }

  public String getLastName() {
    return lastName;
  }
}
