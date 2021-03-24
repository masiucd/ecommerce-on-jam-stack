package com.company.masiu.dto.ex;

public class Student {

  private String firstName;
  private String lastName;
  private int rollName;

  public Student(String firstName, String lastName, int rollName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.rollName = rollName;
  }

  public String getFirstName() {
    return firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public int getRollName() {
    return rollName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public void setRollName(int rollName) {
    this.rollName = rollName;
  }
}
