package com.company.masiu.flights;

import java.util.ArrayList;
import java.util.List;

abstract public class AirPlane {

  private int amountOfSeats;
  private final String name;
  private final float flightWeight;
  private float baggageWeight;
  private boolean canFly;
  private List<Passenger> passengers;

  public AirPlane(int amountOfSeats, String name, float baggageWeight, float totalWeight) {
    this.amountOfSeats = amountOfSeats;
    this.name = name;
    this.baggageWeight = baggageWeight;
    this.flightWeight = totalWeight;
    this.canFly = true;
    this.passengers = new ArrayList<>();
  }

  //  Overloading
  public AirPlane(int amountOfSeats, String name) {
    this.amountOfSeats = amountOfSeats;
    this.name = name;
    this.baggageWeight = 2000f;
    this.flightWeight = 200000;

    this.passengers = new ArrayList<>();
  }

  //  overloading
  public AirPlane(String name) {
    this.amountOfSeats = 500;
    this.name = name;
    this.baggageWeight = 2000f;
    this.flightWeight = 200000;
    this.passengers = new ArrayList<>();
  }

  public void addPassenger(Passenger passenger) {
    if (passengers.size() < amountOfSeats) {
      passengers.add(passenger);
    }
  }

  public boolean hasAvailableSeats() {
    return amountOfSeats > passengers.size();
  }

  public int getAmountOfSeats() {
    return amountOfSeats;
  }

  public String getName() {
    return name;
  }

  public float getBaggageWeight() {
    return baggageWeight;
  }

  public boolean isCanFly() {
    return canFly;
  }

  public float getFlightWeight() {
    return flightWeight;
  }

  public void setBaggageWeight(float baggageWeight) {
    this.baggageWeight = baggageWeight;
  }

  public void setCanFly(boolean canFly) {
    this.canFly = canFly;
  }

  public void setAmountOfSeats(int amountOfSeats) {
    this.amountOfSeats = amountOfSeats;
  }

  public List<Passenger> getPassengers() {
    return passengers;
  }

  @Override
  public String toString() {
    return "AirPlane{" +
           "amountOfSeats=" + amountOfSeats +
           ", name='" + name + '\'' +
           ", flightWeight=" + flightWeight +
           ", baggageWeight=" + baggageWeight +
           ", canFly=" + canFly +
           '}';
  }
}
