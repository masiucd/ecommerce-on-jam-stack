package com.company.masiu;

public class Flight {

  int passenger;
  int seats;
  String destination;

  public Flight(int seats) {
    this.passenger = 0;
    this.seats = seats;
    this.destination = "";
  }

  void addPassenger(int passenger) {
    this.passenger = passenger;
  }

  void updateSeats(int seats){
    this.seats = seats;
  }

  void setDestination(String destination){
    this.destination = destination;
  }

  @Override
  public String toString() {
    return "Flight{" +
           "passenger=" + passenger +
           ", seats=" + seats +
           '}';
  }
}
