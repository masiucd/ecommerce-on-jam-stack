package com.company.masiu.dataStructures;

import java.util.ArrayList;

import com.company.masiu.Print;

class Node<T> {

  T data;
  Node<T> next;

  public Node(T data) {
    this.data = data;
    this.next = null;
  }

  public T getData() {
    return data;
  }

  public Node<T> getNext() {
    return next;
  }
}

public class LinkedList implements LinkedListAble<Integer> {

  Node<Integer> head;
  Node<Integer> tail;
  private int size;

  public LinkedList() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  @Override
  public LinkedList append(Integer value) {
    Node<Integer> newNode = new Node<>(value);
    if (head == null) {
      head = newNode;
      tail = this.head;
      incrementSize();
      return this;
    }

    newNode.next = head;
    head = newNode;
    incrementSize();
    return this;
  }

  @Override
  public void prepend(Integer value) {

  }

  @Override
  public void incrementSize() {
    size++;
  }

  @Override
  public int getSize() {
    return size;
  }

  @Override
  public Node<Integer> getHead() {
    return head;
  }

  @Override
  public void printNodes() {
    Node<Integer> current = head;
    ArrayList<Integer> nodeValues = new ArrayList<>();
    while (current.next != null) {
      nodeValues.add(current.getData());
      current = current.next;
    }

    if (!nodeValues.isEmpty()) {
      nodeValues.forEach(System.out::println);
    } else {
      Print.print("List is empty");
    }
  }
}
