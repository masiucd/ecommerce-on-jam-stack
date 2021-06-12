package com.company.masiu.inheritance;

public class Food implements JustFood {

  private final String name;
  private final int energy;

  public Food(String name, int energy) {
    this.name = name;
    this.energy = energy;
  }

  @Override
  public String getName() {
    return name;
  }

  @Override
  public int getEnergy() {
    return energy;
  }
}
