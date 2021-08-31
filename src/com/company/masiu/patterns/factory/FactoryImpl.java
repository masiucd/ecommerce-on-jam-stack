package com.company.masiu.patterns.factory;

public class FactoryImpl {

  public Shape getShape(String shapeType) {
    if (shapeType.equalsIgnoreCase("square")) {
      return new Square(5);
    }

    if (shapeType.equalsIgnoreCase("rectangle")) {
      return new Rectangle(4, 9);
    }
    return null;
  }
}
