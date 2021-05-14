package com.company.masiu.flights;

import java.util.ArrayList;
import java.util.List;

public class FlightDemo {

  public static void main(String[] args) {
    List<AirPlane> airplanes = new ArrayList<>();

    Person frank = new Person("Frank", 32);
    Person linda = new Person("Linda", 35);

    frank.setAmountOfBags(2);
    linda.setAmountOfBags(5);

    AirPlane boeingToLax = new BoeingFlight("Boeing455");
    AirPlane smallPlane = new BoeingFlight(
      22,
      "f22",
      222,
      1222.34f);

    boeingToLax.addPassenger(frank);
    boeingToLax.addPassenger(linda);

    airplanes.add(boeingToLax);
    airplanes.add(smallPlane);

    printAirplanes(airplanes);

    swapFlightSeats(boeingToLax, smallPlane);

    printAirplanes(airplanes);

    printPassengers(boeingToLax.getPassengers());
  }

  public static void printAirplanes(List<AirPlane> airPlanes) {
    for (AirPlane airplane : airPlanes) {
      System.out.println(
        "airplane " + airplane.getName()
        + " has " +
        airplane.getAmountOfSeats()
        + "seats");
    }
  }

  public static void swapFlightSeats(AirPlane a1, AirPlane a2) {
    int temp = a1.getAmountOfSeats();
    a1.setAmountOfSeats(a2.getAmountOfSeats());
    a2.setAmountOfSeats(temp);
  }

  public static void printPassengers(List<Passenger> passengers) {
    for (Passenger person : passengers) {
      System.out.println(person.getName() + " " + person.getAge());
    }
  }
}
