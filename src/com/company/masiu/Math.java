package com.company.masiu;

public class Math {

  private int a;
  private int b;

  public Math(int a, int b) {
    this.a = a;
    this.b = b;
  }

  public int getA() {
    return a;
  }

  public int getB() {
    return b;
  }

  public int multiplication() {
    return this.a * this.b;
  }

  @Override
  public String toString() {
    return "Math{" +
           "a=" + a +
           ", b=" + b +
           '}';
  }
}
