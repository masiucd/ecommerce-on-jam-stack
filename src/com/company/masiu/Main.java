package com.company.masiu;

import java.util.Arrays;



public class Main {

  public static void main(String[] args) {
//    performCalculation();
//    Card c = new Card();
//    print(c.getHand());
//    String x = c.getRandomCard();
//    print(x);

    Flight.resetAllPassengers();
    Flight f = new Flight(21);
    f.addOnePassenger();
    f.addOnePassenger();
    f.addOnePassenger();

    Flight r = new Flight(111);
    r.addOnePassenger();

    print(r.toString());
    print(Flight.getAllPassengers());

//    Movie movie = new Movie();
//    movie.addMovie("Batman", 100);
//    movie.addMovie("Vikings",20);
//    movie.addMovie("Harry-Potter",120);

//    print(movie.canSeeTheMovie("Batman",150));
//    movie.init();

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