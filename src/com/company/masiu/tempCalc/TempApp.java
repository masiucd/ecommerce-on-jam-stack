package com.company.masiu.tempCalc;

public class TempApp {

  public static void main(String[] args) {
    float x = fromCelsiusToFahrenheit(20);
    float x2 = fromFahrenheitToCelsius(20);

    String formattedString = String.format("%.02f", x2);
    System.out.println(formattedString);
  }

  private static float fromCelsiusToFahrenheit(float celsius) {
    return (celsius * 9 / 5) + 32;
  }

  private static float fromFahrenheitToCelsius(float fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
}
