package com.company.masiu.dataStructures;

import com.company.masiu.Print;

public class App {

  public static void main(String[] args) {
    Stack s = new Stack();
    s.push(1);
    s.push(2);
    s.push(3);
    s.push(99);

    Print.print("last " + s.peek());
    s.pop();
    Print.print("last " + s.peek());
    s.showItems();
  }
}
