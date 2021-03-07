package com.company.masiu;

import java.util.HashMap;

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

  public HashMap<String, Integer> getMovies() {
    return movies;
  }

  public void init(){

  }

  private <T>void print(T v){
    System.out.println(v);
  }

  @Override
  public String toString() {
    return "Movie{" +
           "movies=" + movies +
           '}';
  }
}
