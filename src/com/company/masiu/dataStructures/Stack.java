package com.company.masiu.dataStructures;

import java.util.ArrayList;

import com.company.masiu.Print;

public class Stack {

  private ArrayList<Integer> box;

  public Stack() {
    this.box = new ArrayList<>();
  }

  public ArrayList<Integer> push(int value) {
    box.add(value);
    return box;
  }

  public int peek() {
    return box.get(box.size() - 1);
  }

  public boolean isEmpty() {
    return box.isEmpty();
  }

  public ArrayList<Integer> pop() {
    box.remove(box.get(box.size() - 1));
    return box;
  }

  public void showItems() {
    if (!isEmpty()) {
      for (Integer item : box) {
        Print.print(item);
      }
    } else {
      Print.print("stack is empty");
    }
  }
}
