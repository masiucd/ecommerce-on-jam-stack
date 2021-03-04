package com.company.masiu;

public class MathEquations {

  double leftValue;
  double rightValue;
  char opCode;
  double result;

  void execute() {
    switch (opCode) {
      case 'a':
        result = leftValue + rightValue;
        break;
      case 's':
        result = leftValue - rightValue;
        break;
      case 'm':
        result = leftValue * rightValue;
        break;
      case 'd':
        result = rightValue != 0 ? leftValue / rightValue : 0.0d;
        break;
      default:
        print("invalid " + opCode);
        result = +-0.0d;
    }
  }

  private <T> void print(T v) {
    System.out.println(v);
  }
}
