package com.company.masiu.factoryMethodPattern;

import java.util.ArrayList;
import java.util.List;

abstract public class Website {



  protected List<Page> pages = new ArrayList<>();

  public Website() {
    this.createWebsite();
  }

  public List<Page> getPages() {
    return pages;
  }

  public abstract void createWebsite();
}
