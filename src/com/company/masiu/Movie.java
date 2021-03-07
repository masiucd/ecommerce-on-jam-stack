package com.company.masiu;

import java.util.HashMap;
import java.util.Scanner;

public class Movie {

  HashMap<String, Integer> movies;

  public Movie() {
    this.movies = new HashMap<String, Integer>();
  }

  public void addMovie(String movie, int price) {
    this.movies.put(movie.toLowerCase(), price);
  }

  public String canSeeTheMovie(String movie, int userPayment) {
    int toPay = this.movies.get(movie.toLowerCase());
    return toPay <= userPayment ?
           "You can see the movie " + movie
                                : "you can't see the movie " + movie;
  }

  private boolean canSee(String m, int price) {
    int toPay = this.movies.get(m.toLowerCase());
    return toPay <= price;
  }

  public HashMap<String, Integer> getMovies() {
    return movies;
  }

  private String trimString(String s) {
    return s.toLowerCase().trim();
  }

  public void init() {
    Scanner s = new Scanner(System.in);
    print("what move do you wan to see?");
    String usersChoice = trimString(s.nextLine());
    print("please leave your money");
    int userMoney = s.nextInt();
    boolean doesMovieExist = this.movies.containsKey(usersChoice);

    if (doesMovieExist) {
      int moviePrice = this.movies.get(usersChoice);
      boolean haveAfford = this.canSee(usersChoice, userMoney);
      int difference = moviePrice - userMoney;
      if (haveAfford) {
        print("you will see movie " + usersChoice + " and pay " + moviePrice + "$");
      } else {
        print("sorry but you dont have enough money too se " + usersChoice + "you need " + difference + "left to see it");
      }
    } else {
      print("the movie " + usersChoice + " does not exist");
    }
  }

  private <T> void print(T v) {
    System.out.println(v);
  }

  @Override
  public String toString() {
    return "Movie{" +
           "movies=" + movies +
           '}';
  }
}
