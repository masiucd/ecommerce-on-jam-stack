package com.company.masiu.patterns.builderPattern;

public class FoodOrder {

  public static class Builder {

    private String fruit;
    private String starch;
    private String meat;
    private String drink;
    private String dressing;

    public Builder() {

    }

    public FoodOrder build() {
      return new FoodOrder(this);
    }

    public Builder fruit(String fruit) {
      this.fruit = fruit;
      // instance to this Builder object
      return this;
    }

    public Builder starch(String starch) {
      this.starch = starch;
      // instance to this Builder object
      return this;
    }

    public Builder meat(String meat) {
      this.meat = meat;
      // instance to this Builder object
      return this;
    }

    public Builder dressing(String dressing) {
      this.dressing = dressing;
      // instance to this Builder object
      return this;
    }
    public Builder drink(String drink) {
      this.drink = drink;
      // instance to this Builder object
      return this;
    }
  }

  private final String fruit;
  private final String starch;
  private final String meat;
  private final String drink;
  private final String dressing;

  private FoodOrder(Builder builder) {
    this.fruit = builder.fruit;
    this.starch = builder.starch;
    this.meat = builder.meat;
    this.drink = builder.drink;
    this.dressing = builder.dressing;
  }

  public String getFruit() {
    return fruit;
  }

  public String getStarch() {
    return starch;
  }

  public String getMeat() {
    return meat;
  }

  public String getDrink() {
    return drink;
  }

  public String getDressing() {
    return dressing;
  }
}
