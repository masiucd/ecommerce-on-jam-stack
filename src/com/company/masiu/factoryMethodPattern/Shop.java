package com.company.masiu.factoryMethodPattern;

public class Shop extends Website {

  @Override
  public void createWebsite() {
    pages.add(new CartPage("cart"));
    pages.add(new ItemPage("Items"));
  }
}
