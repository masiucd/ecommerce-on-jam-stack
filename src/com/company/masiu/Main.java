package com.company.masiu;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Scanner;

import com.company.masiu.movie.Movie;
import com.company.masiu.movie.MovieApp;
import com.company.masiu.movie.Person;

public class Main {

  public static void main(String[] args) {
    MovieApp m = new MovieApp();
    Scanner scanner = new Scanner(System.in);
    m.run();

    print("Hello please enter your information");
    print("What is your name");
    String userName = scanner.nextLine();

    print("how old are you");
    String age = scanner.nextLine();

    print("how much are you willing to pay to see the movie?");
    String usersMoney = scanner.nextLine();

    Person user = new Person(userName, Integer.parseInt(age), Integer.parseInt(usersMoney));
    print(user);

    print("select a movie");
    String usersMovieChoice = scanner.nextLine();

    Movie x = m.selectMovie(formatString(usersMovieChoice));
    print(x);

//    HashMap<String, Movie> movies = m.getMovies();
//    m.printMovis();

  }

  public static String formatString(String s) {
    return s.toLowerCase().trim();
  }

  public static <T> void print(T a) {
    System.out.println(a);
  }

  public static <T> void printList(T[] xs) {
    System.out.println(Arrays.toString(xs));
  }
}