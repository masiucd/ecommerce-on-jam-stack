package com.company.masiu.patterns.dtoPattern;

public class Student {

  private String name;
  private final int id;

  public Student(String name, int id) {
    this.name = name;
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public int getId() {
    return id;
  }

  public void setName(String name) {
    this.name = name;
  }
}
