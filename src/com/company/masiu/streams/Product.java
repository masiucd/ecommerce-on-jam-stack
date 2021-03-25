package com.company.masiu.streams;

public class Product {

  String title;
  boolean isCool;
  int price;
  int id;

  public Product(String title, boolean isCool, int price,int id) {
    this.id = id;
    this.title = title;
    this.isCool = isCool;
    this.price = price;
  }

  public String getTitle() {
    return title;
  }

  public int getId() {
    return id;
  }

  public boolean isCool() {
    return isCool;
  }

  public int getPrice() {
    return price;
  }

  @Override
  public String toString() {
    return "Product{" +
           "title='" + title + '\'' +
           ", isCool=" + isCool +
           ", price=" + price +
           ", id=" + id +
           '}';
  }



}
