package com.company.masiu.flights;

public class BoeingFlight extends AirPlane{

  public BoeingFlight(int amountOfSeats, String name, float baggageWeight, float totalWeight) {
    super(amountOfSeats, name, baggageWeight, totalWeight);
  }

  public BoeingFlight(String name) {
    super(name);
  }


}
