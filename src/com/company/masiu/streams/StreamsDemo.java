package com.company.masiu.streams;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class StreamsDemo {

  public static void main(String[] args) {
    List<Dog> dogs = new ArrayList<>();
    Dog dog1 = new Dog("booby", 3, "pug");
    Dog dog2 = new Dog("frank", 8, "puddle");
    Dog dog3 = new Dog("timmy", 5, "Schafer");

    dogs.add(dog1);
    dogs.add(dog2);
    dogs.add(dog3);

    printDofgs(dogs);
    dogsWithUpper(dogs);
    filterDogByAge(dogs,4);
  }

  public static void printDofgs(List<Dog> dogs) {
    dogs.forEach(dog -> System.out.println(dog.getName()));
  }

  public static void dogsWithUpper(List<Dog> dogs) {
    List<String> upperDogs = dogs.stream().map(d -> d.getName().toUpperCase()).collect(Collectors.toList());

    upperDogs.forEach(dog -> System.out.println(dog));
  }

  public static void filterDogByAge(List<Dog> dogs, int ageCondition) {
    List<Dog> filtredDogs = dogs.stream()
      .filter(
        dog -> dog.getAge() > ageCondition)
      .collect(Collectors.toList());

    for (Dog dog : filtredDogs) System.out.println(dog.getName() + " " + dog.getAge());
  }
}
