package com.company.masiu.sandbox;

import java.util.HashMap;

import com.company.masiu.Print;

public class Wrapper {

  private HashMap<String, Item> itemsMap;

  public Wrapper() {
    this.itemsMap = new HashMap<>();
  }

  public void addItem(String name, Item item) {
    itemsMap.put(name, item);
  }

  public void showItems() {
    for (Item item : itemsMap.values()) {
      Print.print(item.getName().toUpperCase() + ":" + "{" + item.getName() + " " + item.getId() + " " + item.getYearCreated() + "}");
    }
  }

  @Override
  public String toString() {
    return "Wrapper{" +
           "itemsMap=" + itemsMap +
           '}';
  }
}
