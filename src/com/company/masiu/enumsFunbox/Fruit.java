package com.company.masiu.enumsFunbox;

import com.company.masiu.Print;

public class Fruit {

  private final FruitType fruitType;
  private final String name;
  private Rank ranking;

  public Fruit(FruitType fruitType, String name, Rank ranking) {
    this.fruitType = fruitType;
    this.name = name;
    this.ranking = ranking;
  }

  public Fruit(FruitType fruitType, String name) {
    this.fruitType = fruitType;
    this.name = name;
    this.ranking = null;
  }

  public FruitType getFruitType() {
    return fruitType;
  }

  public String getName() {
    return name;
  }

  public Rank getRanking() {
    return ranking;
  }

  public void setRanking(Rank ranking) {
    this.ranking = ranking;
  }

  public void higherRank(Fruit fruit) {
    if (fruit.getRanking() != null && this.getRanking() != null) {
      Fruit higherRank = fruit.getRanking().compareTo(this.getRanking()) > 0 ? fruit : this;
      Fruit loweRank = fruit.getRanking().compareTo(this.getRanking()) > 0 ? this : fruit;
      Print.print(higherRank.getName() + " Has a higher rank then " + loweRank.getName());
    } else {
      Print.print("Please add a ranking for the Fruit");
    }
  }
}
