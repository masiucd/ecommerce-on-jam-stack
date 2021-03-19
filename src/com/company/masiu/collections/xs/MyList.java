package com.company.masiu.collections.xs;

import java.util.ArrayList;
import java.util.List;

public class MyList {

  ArrayList<Thing> lightProducts;
  ArrayList<Thing> heavyProducts;

  public MyList() {
    this.lightProducts = new ArrayList<>();
    this.heavyProducts = new ArrayList<>();
  }

  private Thing makeHeavyProduct(int id, String title, int weight, boolean isCool) {
    return new Thing(id, title, weight, isCool);
  }

  private int increaseId(List<Thing> list) {
    return list.size() + 1;
  }

  //  function overload
  private Thing makeHeavyProduct(String title, int weight) {

    return new Thing(increaseId(heavyProducts), title, weight, false);
  }

  //  function overload
  private Thing makeHeavyProduct(String title) {
    return new Thing(increaseId(heavyProducts), title, 12220, false);
  }

  private void initHeavyProducts() {
    Thing buss = makeHeavyProduct("buss");
    Thing airplane = makeHeavyProduct("airplane", 122);
    Thing wale = makeHeavyProduct(increaseId(heavyProducts),"whale", 3220, true);

    this.heavyProducts.add(buss);
    heavyProducts.add(airplane);
    heavyProducts.add(wale);
  }

  public void showHeavyStuff() {
    initHeavyProducts();
    this.heavyProducts.forEach(x -> {
      String res = String.format("%s - %b - %d ", x.title, x.isCool, x.weight);
      System.out.println(res);
    });
  }
}
