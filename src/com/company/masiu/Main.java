package com.company.masiu;

import java.util.Arrays;

public class Main {

  public static void main(String[] args) {
  Algo a = new Algo();
  int[] xs = {1,2,3,4,5,6,7};
  print(a.binarySearch(xs,7));
  }

  private static MathEquation createEqautions(double leftValue, double rightValue, char opCode) {
    MathEquation equation = new MathEquation(leftValue, rightValue, opCode);
    return equation;
  }

  static void performCalculation() {
    double[] leftValues = {100.0d, 25.0d, 225.0d, 11.d};
    double[] rightValues = {112.0d, 915.0d, 35.0d, 12.d};
    char[] opCodes = {'a', 's', 'd', 'm'};
    double[] results = new double[opCodes.length];

    MathEquation[] equations = new MathEquation[4];
    equations[0] = createEqautions(100.0d, 50.0d, 'd');
    equations[1] = createEqautions(25.0d, 21.0d, 'a');
    equations[2] = createEqautions(123.0d, 12.0d, 's');
    equations[3] = createEqautions(45.0d, 330.0d, 'm');

    for (int i = 0; i < opCodes.length; i++) {
//      results[i] = equations[0].execute(opCodes[i], leftValues[i], rightValues[i]);
    }
    for (double currentResult : results) {
      print("current result is " + currentResult);
    }
  }



  public static <T> void print(T a) {
    System.out.println(a);
  }

  public static <T> void printList(T[] xs) {
    System.out.println(Arrays.toString(xs));
  }
}