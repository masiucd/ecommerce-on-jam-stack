package com.company.masiu.enumsFunbox;

import java.util.Scanner;

import com.company.masiu.Print;

public class App {

  public static void main(String[] args) {

    FruitType grannySmith = FruitType.SOUR;
    FruitType banana = FruitType.SWEET;
    FruitType date = FruitType.SWEET;

    isTypeTheSame(banana, date);
    isTypeTheSame(banana, grannySmith);

    Fruit apple = new Fruit(FruitType.SOUR, "Granny smith", Rank.OK);
    Fruit yellowBanana = new Fruit(FruitType.SOUR, "yellow Banana", Rank.VERY_NICE);

    apple.higherRank(yellowBanana);

    Print.print("name a fruit");
    Scanner scanner = new Scanner(System.in);
    String fruitName = scanner.nextLine();
    if (fruitName.length() < 3) {
      throw new RuntimeException("NOooooo");
    }
  }

  public static void isTypeTheSame(FruitType fruitType1, FruitType fruitType2) {
    if (fruitType1 == fruitType2) {
      Print.print(fruitType1 + " " + fruitType2 + " are the same");
    } else {
      Print.print(fruitType1 + " " + fruitType2 + " are NOT the same");
    }
  }

  public static void displayResponsibility(FruitType fruit) {
    switch (fruit) {
      case SWEET:
        Print.print("I am sweet and have a lot of sugar");
        break;
      case BITTER:
        Print.print("I was made so no one can eat me up");
        break;
      case SOUR:
        Print.print("When you don't want to eat anything sweet ore bitter");
        break;
      default:
        Print.print("could nor recognize type of " + fruit);
    }
  }
}
