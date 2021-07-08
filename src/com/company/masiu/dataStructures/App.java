package com.company.masiu.dataStructures;

import com.company.masiu.Print;

public class App {

  public static void main(String[] args) {
    LinkedList ll = new LinkedList();

    ll.prepend(1);
    Node<Integer> head = ll.getHead();

    Print.print(head);
  }
}
