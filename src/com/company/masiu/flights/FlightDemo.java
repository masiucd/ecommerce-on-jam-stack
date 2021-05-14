package com.company.masiu.flights;

import java.util.ArrayList;
import java.util.List;

public class FlightDemo {

  public static void main(String[] args) {
    List<AirPlane> airplanes = new ArrayList<>();

    AirPlane boeingToLax = new BoeingFlight("Boeing455");
    AirPlane smallPlane = new BoeingFlight(
      22,
      "f22",
      222,
      1222.34f);

    airplanes.add(boeingToLax);
    airplanes.add(smallPlane);

    printAirplanes(airplanes);

    swapFlightSeats(boeingToLax, smallPlane);

    printAirplanes(airplanes);
  }

  public static void printAirplanes(List<AirPlane> airPlanes) {
    for (AirPlane airplane : airPlanes) {
      System.out.println("airplane " + airplane.getName() + " has " + airplane.getAmountOfSeats() + "seats");
    }
  }

  public static void swapFlightSeats(AirPlane a1, AirPlane a2) {
    int temp = a1.getAmountOfSeats();
    a1.setAmountOfSeats(a2.getAmountOfSeats());
    a2.setAmountOfSeats(temp);
  }
}
