package com.company.masiu.patterns.factory;

import com.company.masiu.Print;

public class App {

  public static void main(String[] args) {
    FactoryImpl factory = new FactoryImpl();

    Shape shape1 = factory.getShape("square");
    Print.print("shape1 area is " + shape1.area());
  }
}
