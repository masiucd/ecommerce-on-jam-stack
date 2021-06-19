package com.company.masiu.inheritance;

import java.util.ArrayList;
import java.util.List;

public abstract class Animal {

  private final String name;
  private final int age;
  private final List<Food> belly;
  private int totalEnergy;

  public Animal(String name, int age, List<Food> belly) {
    this.name = name;
    this.age = age;
    this.belly = belly;
    this.totalEnergy = 0;
  }

  public Animal(String name, int age) {
    this.name = name;
    this.age = age;
    this.belly = new ArrayList<Food>();
    this.totalEnergy = 0;
  }

  public String getName() {
    return name;
  }

  public int getAge() {
    return age;
  }

  public List<Food> getBelly() {
    return belly;
  }

  public void printInsideBelly() {
    belly.forEach(food -> {
      String s = String.format("%s %d", food.getName(), food.getEnergy());
      System.out.println(s);
    });
  }

  public void eat(Food food) {
    addEnergy(food.getEnergy());
    belly.add(food);
  }

  public int getTotalEnergy() {
    return totalEnergy;
  }

  public boolean poop() {
    if (belly.size() > 0) {
      belly.remove(belly.size() - 1);
      return true;
    }
    return false;
  }

  private void addEnergy(int energy) {
    this.totalEnergy += energy;
  }
}
