package com.company.masiu.prototypePattern;

public abstract class Item implements Cloneable {

  public String title;
  public float price;
  public String url;

  @Override
  protected Object clone() throws CloneNotSupportedException {
    return super.clone();
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public float getPrice() {
    return price;
  }

  public void setPrice(float price) {
    this.price = price;
  }

  public String getUrl() {
    return url;
  }

  public void setUrl(String url) {
    this.url = url;
  }
}
