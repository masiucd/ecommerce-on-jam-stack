package com.company.masiu.tempCalc;

import java.util.Scanner;

public class TempApp {

  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    print("enter your degree");
    float degree = Float.parseFloat(scanner.nextLine());
    print(degree);

    print("do you want to convert it Celsius or Fahrenheit? Enter C for Celsius or F for Fahrenheit");
    String measureType = scanner.nextLine();

    if (measureType.toLowerCase().equals("c")) {
      float finalResult = fromCelsiusToFahrenheit(degree);
      String formattedResult = String.format("Celsius to Fahrenheit is =  %.02f F", finalResult);
      print(formattedResult);
    } else if (measureType.toLowerCase().equals("f")) {
      float finalResult = fromFahrenheitToCelsius(degree);
      String formattedResult = String.format("fahrenheit to Celsius is =  %.02f C", finalResult);
      print(formattedResult);
    } else {
      String notValidUnit = String.format("could not parse %s", measureType);
      print(notValidUnit);
    }
  }

  private static float fromCelsiusToFahrenheit(float celsius) {
    return (celsius * 9 / 5) + 32;
  }

  private static float fromFahrenheitToCelsius(float fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }

  private static <T> void print(T x) {
    System.out.println(x);
  }
}
