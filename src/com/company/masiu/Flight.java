package com.company.masiu;

public class Flight {

  int passengers, seats;
  private static int allPassengers;
  String destination;

  public Flight(int seats) {
    this.passengers = 0;
    this.seats = seats;
    this.destination = "";
  }

  public static int getAllPassengers() {
    return allPassengers;
  }

  public static void resetAllPassengers() {
    allPassengers = 0;
  }

  void addOnePassenger() {
    if (passengers < seats) {
      passengers += 1;
      allPassengers += 1;
    }
  }

  void updateSeats(int seats) {
    this.seats = seats;
  }

  void setDestination(String destination) {
    this.destination = destination;
  }

  public int getPassengers() {
    return passengers;
  }

  public int getSeats() {
    return seats;
  }

  public String getDestination() {
    return destination;
  }

  @Override
  public String toString() {
    return "Flight{" +
           "passengers=" + passengers +
           ", seats=" + seats +
           ", destination='" + destination + '\'' +
           '}';
  }
}
