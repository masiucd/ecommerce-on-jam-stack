package com.company.masiu.streams;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class StreamsDemo {

  public static void main(String[] args) {
    List<Team> teams = makeTeamList();
    printTeams(teams);

    List<Team> xs = filterTeamsByYear(1903, teams);
    printTeams(xs);
  }

  public static List<Dog> makeDogs() {
    List<Dog> dogs = new ArrayList<>();
    Dog dog1 = new Dog("booby", 3, "pug");
    Dog dog2 = new Dog("frank", 8, "puddle");
    Dog dog3 = new Dog("timmy", 5, "Schafer");
    dogs.add(dog1);
    dogs.add(dog2);
    dogs.add(dog3);
    return dogs;
  }

  public static List<Team> makeTeamList() {
    List<Team> teams = new ArrayList<>();
    teams.add(new Team("Legia", "Zyleta", 1916));
    teams.add(new Team("IFK GBG", "Ultras GBG", 1904));
    teams.add(new Team("Man utd", "Red devils", 1878));
    return teams;
  }

  public static void printDofgs(List<Dog> dogs) {
    dogs.forEach(dog -> System.out.println(dog.getName()));
  }

  public static void dogsWithUpper(List<Dog> dogs) {
    List<String> upperDogs = dogs.stream().map(d -> d.getName().toUpperCase()).collect(Collectors.toList());

    upperDogs.forEach(System.out::println);
  }

  public static void filterDogByAge(List<Dog> dogs, int ageCondition) {
    List<Dog> filtredDogs = dogs.stream()
      .filter(
        dog -> dog.getAge() > ageCondition)
      .collect(Collectors.toList());

    for (Dog dog : filtredDogs) System.out.println(dog.getName() + " " + dog.getAge());
  }

  private static List<Team> filterTeamsByYear(int year, List<Team> teams) {
    return teams.stream().filter(team -> team.getCreated() > year).collect(Collectors.toList());
  }

  private static void printTeams(List<Team> teams) {
    for (Team team : teams) System.out.println(team.presentTeam());
  }
}
