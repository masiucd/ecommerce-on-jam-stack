package com.company.masiu.prototypePattern;

public class Demo {

  public static void main(String[] args) {
    Registry registry = new Registry();
    Movie movie = new Movie();
    movie.setTitle("Prototyoe pattern in Java");

    System.out.println(movie);
    System.out.println(movie.getRuntime());
    System.out.println(movie.getTitle());
    System.out.println(movie.getUrl());

    Movie anotherMovie = (Movie) registry.createItem("Movie");
    anotherMovie.setTitle("Kill Bill");

    System.out.println(anotherMovie);
    System.out.println(anotherMovie.getRuntime());
    System.out.println(anotherMovie.getTitle());
    System.out.println(anotherMovie.getUrl());
  }
}
