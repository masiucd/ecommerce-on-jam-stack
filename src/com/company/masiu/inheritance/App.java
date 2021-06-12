package com.company.masiu.inheritance;

public class App {

  public static void main(String[] args) {
    Dog bobby = new Dog("bobby", 2, "pug");
    print(bobby.getName());

    Food burger = new Food("Burger", 100);
    Food pizza = new Food("Pizza", 120);
    Food banana = new Food("Banana", 220);

    bobby.eat(burger);
    bobby.eat(pizza);
    bobby.eat(banana);

    print(bobby.getTotalEnergy());

    bobby.poop();
    bobby.printInsideBelly();

  }

  public static <T> void print(T v) {
    System.out.println(v);
  }
}
