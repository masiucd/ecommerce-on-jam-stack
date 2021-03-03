package com.company.masiu;

import java.time.Instant;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import javax.swing.text.DateFormatter;

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

  public void now() {
    LocalDate date = LocalDate.now();
    print(date);
  }

  public void parseToUseData() {
    String usDateString = "07-03-2021";
    DateTimeFormatter usDateFormat = DateTimeFormatter.ofPattern("MM-dd-yyyy");
    LocalDate theDate = LocalDate.parse(usDateString, usDateFormat);
    print(theDate);
  }
}
