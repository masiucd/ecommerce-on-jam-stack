package com.company.masiu.collections.xs;

public class Thing {

  int id;
  String title;
  int weight;
  boolean isCool;

  public Thing(int id, String title, int weight, boolean isCool) {
    this.id = id;
    this.title = title;
    this.weight = weight;
    this.isCool = isCool;
  }



  public int getId() {
    return id;
  }

  public String getTitle() {
    return title;
  }

  public int getWeight() {
    return weight;
  }

  public boolean isCool() {
    return isCool;
  }
}
