package com.company.masiu.flights;

public class Traveler implements Alive {

  private Mood mood;
  private String name;
  private int age;
  private long amountOfMoney;

  public Traveler(Mood mood, String name, int age, long amountOfMoney) {
    this.mood = mood;
    this.name = name;
    this.age = age;
    this.amountOfMoney = amountOfMoney;
  }

  public Mood getMood() {
    return mood;
  }

  @Override
  public String getName() {
    return name;
  }

  @Override
  public int getAge() {
    return age;
  }

  @Override
  public double getAmountOfMoney() {
    return amountOfMoney;
  }

  @Override
  public Mood geMood() {
    return null;
  }

  @Override
  public void setMood(Mood mood) {
    this.mood = mood;
  }

  @Override
  public void setName(String name) {
    this.name = name;
  }
}
