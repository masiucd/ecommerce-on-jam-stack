package com.company.masiu.strings;

public class StringDemo {

  public static void main(String[] args) {
    String string = "java";
    String string2 = "java";
    char giveMeJ = string.charAt(0);
    String stringUpper = string.toUpperCase();

    boolean isStringString = string.equals(string2);

    print(giveMeJ);
    print(isStringString);
  }

  private static <T> void print(T s) {
    System.out.println(s);
  }
}
