package com.company.masiu.collections.xs;

public class Thing {

  String title;
  int weight;
  boolean isCool;

  public Thing(String title, int weight, boolean isCool) {
    this.title = title;
    this.weight = weight;
    this.isCool = isCool;
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
