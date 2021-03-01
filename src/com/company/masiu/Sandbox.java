package com.company.masiu;

import java.util.Random;
import java.util.Scanner;

public class Sandbox {

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

  public static String askUser(int n) {
    System.out.println("guess the correct number");
    System.out.println("correct number is " + n);
    Scanner scanner = new Scanner(System.in);
    String userInput = scanner.nextLine();
    return userInput;
  }
}
