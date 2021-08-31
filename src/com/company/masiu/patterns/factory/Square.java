package com.company.masiu.patterns.factory;

public class Square implements Shape {

  private final int side;

  public Square(int side) {
    this.side = side;
  }

  @Override
  public int area() {
    return side * side;
  }
}
