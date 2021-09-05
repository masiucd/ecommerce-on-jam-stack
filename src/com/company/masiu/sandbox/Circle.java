package com.company.masiu.sandbox;

public class Circle implements Shape {

  private final float diamter;
  private final float radius;
  private final String name;

  public Circle(float diamter, String name) {
    this.diamter = diamter;
    this.radius = diamter / 2;
    this.name = name;
  }

  public float getDiamter() {
    return diamter;
  }

  public double getRadius() {
    return radius;
  }

  public String getName() {
    return name;
  }

  @Override
  public double area() {
    double pi = Math.PI;
    return Math.pow(pi * radius, 2);
  }

  @Override
  public double circumference() {
    return 2 * (Math.PI * radius);
  }
}
