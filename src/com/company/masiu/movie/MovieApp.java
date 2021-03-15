package com.company.masiu.movie;

import java.util.HashMap;

public class MovieApp {

  HashMap<String, Movie> movies;

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
  }

  public void run() {
    this.initMovies();
  }

  public Movie getGivenMovie(String key) {

    return movies.get(key);
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
}
