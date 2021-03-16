package com.company.masiu.collections.xs;

import java.util.ArrayList;
import java.util.List;

public class MyList {

  List<Thing> lightProducts;
  List<Thing> heavyProducts;

  public MyList() {
    this.lightProducts = new ArrayList<>();
    this.heavyProducts = new ArrayList<>();
  }

  private Thing makeHeavyProduct(String title, int weight, boolean isCool) {
    return new Thing(title, weight, isCool);
  }

  //  function overload
  private Thing makeHeavyProduct(String title, int weight) {
    return new Thing(title, weight, false);
  }

  //  function overload
  private Thing makeHeavyProduct(String title) {
    return new Thing(title, 12220, false);
  }

  private void initHeavyProducts() {
    Thing buss = makeHeavyProduct("buss");
    Thing airplane = makeHeavyProduct("airplane", 122);
    Thing wale = makeHeavyProduct("whale", 3220, true);

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
