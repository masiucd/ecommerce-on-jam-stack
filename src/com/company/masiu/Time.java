package com.company.masiu;

import java.time.Instant;

public class Time {

  public void checkRelationship(Instant i) {
    Instant fromNow = Instant.now();
    if (i.compareTo(fromNow) > 0) {
      print("instant is in the future");
    } else if (i.compareTo(fromNow) < 0) {
      print("instant is in the past");
    } else {
      print("they are equal");
    }
  }

  private <T> void print(T value) {
    System.out.println(value);
  }
}
