package com.company.masiu.sandbox;

import java.util.List;
import java.util.stream.Collectors;

public class App {

  public static void main(String[] args) {

    Fp fp = new Fp();

    List<String> wordList = fp.makeWordList()
      .stream().filter(fp.getBelow5Chars()).collect(Collectors.toList());

//    fp.printList(wordList);

    Wrapper wrapper = new Wrapper();
    wrapper.addItem("a", new Item(1, "Banana", 2002));
    wrapper.addItem("b", new Item(2, "Apple", 2001));
    wrapper.showItems();
  }
}
