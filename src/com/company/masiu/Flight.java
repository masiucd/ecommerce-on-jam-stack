package com.company.masiu;

public class Flight {

  int passenger;
  int seats;

  public Flight(int seats) {
    this.passenger = 0;
    this.seats = seats;
  }

  void addPassenger(int passenger) {
    this.passenger = passenger;
  }

  @Override
  public String toString() {
    return "Flight{" +
           "passenger=" + passenger +
           ", seats=" + seats +
           '}';
  }
}
