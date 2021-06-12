package com.company.masiu.inheritance;

import java.util.List;

public class Dog extends Animal {

  private final String breed;

  public Dog(String name, int age, List<Food> belly, String breed) {
    super(name, age, belly);
    this.breed = breed;
  }

  public Dog(String name, int age, String breed) {
    super(name, age);
    this.breed = breed;
  }

  public String getBreed() {
    return breed;
  }

  @Override
  public String getName() {
    return super.getName();
  }

  @Override
  public int getAge() {
    return super.getAge();
  }

  @Override
  public List<Food> getBelly() {
    return super.getBelly();
  }

  @Override
  public void printInsideBelly() {
    super.printInsideBelly();
  }

  @Override
  public void eat(Food food) {
    super.eat(food);
  }

  @Override
  public int getTotalEnergy() {
    return super.getTotalEnergy();
  }

  @Override
  public boolean poop() {
    return super.poop();
  }
}
