package com.company.masiu.dates;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Scanner;

public class App {

  public static void main(String[] args) throws ParseException {
    Date d = new Date();
    SimpleDateFormat ymd = new SimpleDateFormat("yyyy-MM-dd");
    Date d1 = ymd.parse("2021-05-01");

    print(d1);

    // Scanner s = new Scanner(System.in);
    // print("enter a time stamp");
    // String edvinPropInput = s.nextLine();

    // Date edvinProp = ymd.parse(edvinPropInput);

    // int comapreD1WithD2 = d1.compareTo(d2);
    // int result = d1.compareTo(d);
    // print(result);

    // if (result)

    // if 1 then d1 is greater them d2
    // if 0 then they are equal
    // if < 0 then d2 is greater

    // the property should be compared to the current date, today's date
    // if property is less then current date then return True
    // if property is greater then current date return False

    Date today = new Date();
    boolean res = d1.before(today);

    boolean res2 = today.after(d1);
    // print(today);
    // print(res2);
    print(res);
  }

  private static <T> void print(T argument) {
    System.out.println(argument);
  }
}
