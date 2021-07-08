package com.company.masiu.sandbox;

public class Item {

  private int id;
  private String name;
  private int yearCreated;

  public Item(int id, String name, int yearCreated) {
    this.id = id;
    this.name = name;
    this.yearCreated = yearCreated;
  }

  public String getName() {
    return name;
  }

  public int getId() {
    return id;
  }

  public int getYearCreated() {
    return yearCreated;
  }
}
