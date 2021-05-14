package com.company.masiu.flights;

abstract public class AirPlane {

  private int amountOfSeats;
  private final String name;
  private final float flightWeight;
  private float baggageWeight;
  private boolean canFly;

  public AirPlane(int amountOfSeats, String name, float baggageWeight, float totalWeight) {
    this.amountOfSeats = amountOfSeats;
    this.name = name;
    this.baggageWeight = baggageWeight;
    this.flightWeight = totalWeight;
    this.canFly = true;
  }

  //  overloading
  public AirPlane(String name) {
    this.name = name;
    this.amountOfSeats = 500;
    this.baggageWeight = 2000f;
    this.flightWeight = 200000;
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
