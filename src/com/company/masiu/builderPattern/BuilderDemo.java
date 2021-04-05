package com.company.masiu.builderPattern;

import java.util.ArrayList;
import java.util.List;

import com.company.masiu.builderPattern.FoodOrder.Builder;

public class BuilderDemo {

  public static void main(String args[]) {
    List<String> foodStuff = new ArrayList();
    FoodOrder.Builder builder = new Builder();

    builder.fruit("Apple").meat("Beef").starch("Potato").dressing("No dressing").drink("Coke");

    FoodOrder foodOrder = builder.build();

    foodStuff.add((foodOrder.getDrink()));
    foodStuff.add((foodOrder.getDressing()));
    foodStuff.add((foodOrder.getStarch()));
    foodStuff.add((foodOrder.getFruit()));
    foodStuff.add((foodOrder.getMeat()));

    foodStuff.stream().forEach(System.out::println);
  }
}
