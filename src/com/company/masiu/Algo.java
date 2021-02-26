package com.company.masiu;

public class Algo {

  public String reverseString(String s) {
    String revered = "";

    for (char c : s.toCharArray()) {

      revered = c + revered;
    }
    return revered;
  }
}
