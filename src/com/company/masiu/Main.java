package com.company.masiu;

import java.util.Arrays;

public class Main {

  public static void main(String[] args) {
      Card cardGame = new Card();


      String firstCard = cardGame.getRandomCard();
//      print(firstCard);

    Object obj = new Card[10];
    print(obj.toString() );
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