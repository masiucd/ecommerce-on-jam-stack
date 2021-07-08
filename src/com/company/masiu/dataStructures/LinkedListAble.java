package com.company.masiu.dataStructures;

public interface LinkedListAble<T> {

  LinkedList append(T value);

  void prepend(T value);

  int getSize();

  void incrementSize();

  void printNodes();

  Node<T> getHead();
}
