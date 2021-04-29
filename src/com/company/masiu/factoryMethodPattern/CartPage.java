package com.company.masiu.factoryMethodPattern;

public class CartPage extends Page{
  private final String title;

  public CartPage(String title) {
    this.title = title;
  }

  public String getTitle() {
    return title;
  }
}
