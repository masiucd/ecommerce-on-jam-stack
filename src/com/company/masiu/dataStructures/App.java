package com.company.masiu.dataStructures;

import com.company.masiu.Print;

public class App {

  public static void main(String[] args) {
    Queue<Integer> q = new Queue<>();
    q.enqueue(2);
    q.enqueue(33);
    q.enqueue(45);
    q.deque();
    q.print();

  }
}
