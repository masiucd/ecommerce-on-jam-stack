package com.company.masiu.prototypePattern;

import java.util.HashMap;
import java.util.Map;

public class Registry {

  private Map<String, Item> items = new HashMap<String, Item>();

  public Registry() {
    loadItems();
  }

  public Item createItem(String type) {
    Item item = null;
    try {
      item = (Item) (items.get(type)).clone();
    } catch (CloneNotSupportedException e) {
      e.printStackTrace();
    }
    return item;
  }

  private void loadItems() {
    Movie movie = new Movie();
    movie.setTitle("Batman");
    movie.setPrice(22.22f);
    movie.setRuntime("2 hours");
    items.put("Movie", movie);

    Book book = new Book();
    book.setTitle("Some book");
    book.setNumberOfPages(222);
    book.setPrice(22.90f);
    items.put("Book", book);
  }
}
