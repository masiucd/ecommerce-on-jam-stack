package com.company.masiu.dataStructures.queue;

import java.util.ArrayList;
import java.util.List;

class Node<T> {

  public T data;
  Node<T> next;

  public Node(T data) {
    this.data = data;
    this.next = null;
  }
}

public class Queue<T> {

  public Node<T> first;
  public Node<T> last;
  private int size;

  public Queue() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  public Node<T> enqueue(T key) {
    Node<T> newNode = new Node<>(key);
    if (this.first == null) {
      this.first = newNode;
      this.last = newNode;
      this.size++;
      return newNode;
    }
    this.last.next = newNode;
    this.last = newNode;

    return newNode;
  }

  public boolean deque() {
    if (this.first == null) return false;
    if (this.first == this.last) {
      this.last = null;
      this.size--;
      return true;
    }
    this.first = this.first.next;
    return true;
  }

  public Node<T> peek() {

    return first;
  }

  public int getSize() {
    return size;
  }

  public void print() {
    List<T> xs = new ArrayList<>();
    Node<T> current = this.first;
    while (current != null) {
      xs.add(current.data);
      current = current.next;
    }
    for (T x : xs) {
      System.out.println(x);
    }
  }
}
