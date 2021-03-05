package com.company.masiu;

import java.util.Arrays;

import com.company.masiu.interfaces.Card;

public class Main {

  public static void main(String[] args) {
//    performCalculation();
    Card c = new Card();
    print(c.getHand());
    String x = c.getRandomCard();
    print(x);
  }

  private static MathEquation createEqautions(double leftValue, double rightValue, char opCode) {
    MathEquation equation = new MathEquation(leftValue, rightValue, opCode);
    return equation;
  }

  static void performCalculation() {

    MathEquation[] equations = new MathEquation[4];
    equations[0] = createEqautions(100.0d, 50.0d, 'd');
    equations[1] = createEqautions(25.0d, 21.0d, 'a');
    equations[2] = createEqautions(123.0d, 12.0d, 's');
    equations[3] = createEqautions(45.0d, 330.0d, 'm');

    for (MathEquation equation : equations) {
      equation.execute();
      print("result= " + equation.result);
    }
  }

  public static <T> void print(T a) {
    System.out.println(a);
  }

  public static <T> void printList(T[] xs) {
    System.out.println(Arrays.toString(xs));
  }
}