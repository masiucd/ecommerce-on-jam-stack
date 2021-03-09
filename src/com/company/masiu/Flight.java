package com.company.masiu;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class Flight {

  List<Passenger> passengers;
  int seats;
  int pricePerBag;
  private static int allPassengers;
  String destination;

  public Flight(int seats, int pricePerBag, String destination) {
    this.passengers = new ArrayList<Passenger>();
    this.seats = seats;
    this.pricePerBag = pricePerBag;
    this.destination = destination;
  }

  public void addPassenger(Passenger... list) {
    if (seats > this.passengers.size()) {
      for (Passenger p : list) {
        this.passengers.add(p);
      }
    }
  }

  public int totalPriceWithBags() {
    int total = 1;
    for (Passenger p : this.passengers) {
      total += (p.checkedBags * this.pricePerBag);
    }
    return total;
  }

  public List<Passenger> getPassengers() {
    return passengers;
  }

  public void showAllPassengers() {
    for (Passenger p : this.passengers) {
      print(p);
    }
  }

  private <T> void print(T value) {
    System.out.println(value);
  }
}
