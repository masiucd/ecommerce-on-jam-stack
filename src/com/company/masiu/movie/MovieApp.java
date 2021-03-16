package com.company.masiu.movie;

import java.util.HashMap;
import java.util.Scanner;

public class MovieApp {

  HashMap<String, Movie> movies;
  Scanner s;

  public MovieApp() {
    this.movies = new HashMap<>();
  }

  private void initMovies() {
    Movie batman = new Movie(2.2f, "Batman", 100, 15);
    Movie lordOfTheRings = new Movie(3.4f, "lordOfTheRings", 200, 15);
    Movie jaws = new Movie(1.2f, "jaws", 120, 18);
    this.movies.put("batman", batman);
    this.movies.put("lordOfTheRings", lordOfTheRings);
    this.movies.put("jaws", jaws);
    this.s = new Scanner(System.in);
  }

  private <T> T stdInStdOut() {
    return (T) this.s.nextLine();
  }

  public void run() {
    this.initMovies();

    Scanner scanner = new Scanner(System.in);
    print("Hello please enter your information");
    print("What is your name");
    String userName = stdInStdOut();

    print("how old are you");
    String age = stdInStdOut();

    print("how much are you willing to pay to see the movie?");
    String usersMoney = stdInStdOut();

    Person user = new Person(userName, Integer.parseInt(age), Integer.parseInt(usersMoney));
    print(user);

    print("select a movie");
    String usersMovieChoice = stdInStdOut();

    Movie movie = selectMovie(formatString(usersMovieChoice));

    if (user.getAge() < movie.getMinAge()) {
      print("You are to young to see the movie");
      return;
    } else if (user.getMoney() < movie.getPrice()) {
      print("you have not enough money to see the movie");
      int difference = movie.getPrice() - user.getMoney();
      print("You need " + difference + "$ more too see the moveie");
      return;
    } else {
      print("you will see the movie " + movie.getTitle() + " with a duration of " + movie.getDuration());
    }
  }

  public Movie getGivenMovie(String key) {

    return movies.get(key);
  }

  public String formatString(String s) {
    return s.toLowerCase().trim();
  }

  public void printMovis() {
    for (Movie movie : this.getMovies().values()) {
      System.out.println(movie.toString());
    }
  }

  public HashMap<String, Movie> getMovies() {
    return movies;
  }

  public Movie selectMovie(String movieKey) {
    return this.movies.get(movieKey);
  }

  public <T> void print(T a) {
    System.out.println(a);
  }
}
