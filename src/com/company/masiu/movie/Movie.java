package com.company.masiu.movie;

public class Movie {

  float duration;
  String title;
  int price;
  int minAge;

  public Movie(float duration, String title, int price, int minAge) {
    this.duration = duration;
    this.title = title;
    this.price = price;
    this.minAge = minAge;
  }

  public boolean canSeeMovie(int age) {
    return age >= this.getMinAge();
  }

  public float getDuration() {
    return duration;
  }

  public String getTitle() {
    return title;
  }

  public int getPrice() {
    return price;
  }

  public int getMinAge() {
    return minAge;
  }



  @Override
  public String toString() {
    return "Movie{" +
           "duration=" + duration +
           ", title='" + title + '\'' +
           ", price=" + price +
           ", minAge=" + minAge +
           '}';
  }
}
