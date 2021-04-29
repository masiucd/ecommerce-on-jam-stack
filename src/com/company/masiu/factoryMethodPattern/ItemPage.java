package com.company.masiu.factoryMethodPattern;

public class ItemPage extends Page {

  private final String title;

  public ItemPage(String title) {
    this.title = title;
  }

  public String getTitle() {
    return title;
  }
}
