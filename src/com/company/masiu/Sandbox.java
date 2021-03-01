package com.company.masiu;

import java.util.Random;
import java.util.Scanner;

public class Sandbox {

  public String getUserInput() {
    Scanner scanner = new Scanner(System.in);
    String input = scanner.nextLine();
    return input;
  }

  public void calc() {
    System.out.println("give me number a");
    String a = getUserInput();

    System.out.println("give me number b");
    String b = getUserInput();

    System.out.println("give me a operation + - / ore *");
    String op = getUserInput();
    int result = execute(op, Integer.parseInt(a), Integer.parseInt(b));

    System.out.println(result);
  }

  public int execute(String op, int a, int b) {
    int res = 0;

    if (op.equals("+")) {
      res = a + b;
    }
    if (op.equals("-")) {
      res = a - b;
    }
    if (op.equals("/")) {
      res = a / b;
    }
    if (op.equals("*")) {
      res = a * b;
    }
    return res;
  }

  public void guessGame() {
    Random randomNum = new Random();
    int rand = randomNum.nextInt(11);
    boolean isGameOn = true;
    while (isGameOn) {
      String guess = askUser(rand);
      if (guess.equals(String.valueOf(rand))) {
        System.out.println("you gussed correct");
        isGameOn = false;
      } else {
        System.out.println("you gussed wrong");
      }
    }
  }

  public void guessGameVersionTwo() {
    Random randomNum = new Random();
    int rand = randomNum.nextInt(11);
    boolean isGameOn = true;
    while (isGameOn) {
      String guess = askUser(rand);
      if (guess.equals(String.valueOf(rand))) {
        System.out.println("you gussed correct");
        isGameOn = false;
      } else if (Integer.parseInt(guess) < rand) {
        System.out.println("to low");
      } else if (Integer.parseInt(guess) > rand) {
        System.out.println("to high");
      }
    }
  }

  public String askUser(int n) {
    System.out.println("guess the correct number");
    System.out.println("correct number is " + n);
    String userInput = this.getUserInput();
    return userInput;
  }
}
