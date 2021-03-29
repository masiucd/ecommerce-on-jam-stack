package com.company.masiu.streams;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

public class StreamProducts<T> {

  List<Product> products;
  List<Integer> xs;

  public StreamProducts() {
    this.products = new ArrayList<>();
    this.xs = new ArrayList<>();
    Product car = new Product("Audi", true, 100000, 1);
    Product buss = new Product("Bus__21", false, 10000, 2);
    Product shoes = new Product("Air max", true, 101, 3);
    Product flower = new Product("Rose", true, 10, 4);

    xs.add(1);
    xs.add(552);
    xs.add(133);
    xs.add(12);

    products.add(car);
    products.add(buss);
    products.add(shoes);
    products.add(flower);

    this.products = Collections.unmodifiableList(this.products);
  }

  public void printProducts() {
    products.stream().forEach(x -> {
      String formatIsCool = x.isCool ? "I am cool" : "I am  NOT cool";
      String s = String.format("%s\n  %s\n price=%d$\n", x.title, formatIsCool, x.price);
      System.out.println(s);
    });
  }

  public void onlyCoolProducts() {
    products.stream().filter(product -> product.isCool)
      .sorted(Comparator.comparingInt(Product::getPrice))
      .map(Product::getTitle)
      .forEach(System.out::println);
  }

  public void productsWithUppercase() {
    products.stream().map(p -> p.title.toUpperCase())
      .forEach(System.out::println);
  }

  public String getProduct(int id) {
    return products.get(id).toString();
  }

  public boolean hasProduct(Product product) {
    return products.stream()
      .anyMatch(p -> p.title.toLowerCase() == product.title);
  }

  public void collectNonCoolProducts() {
    Set<String> productsList = products
      .stream()
      .filter(p -> !p.isCool)
      .map(p -> p.title)
      .collect(Collectors.toSet());

    System.out.println(productsList);
  }

  public int sumXs(boolean x) {
    return x ? xs.stream()
      .reduce(0, (a, b) -> a + b) : xs.stream().reduce(0, Integer::sum);
  }

  public List<Integer> copyIntList() {
    return List.copyOf(xs);
  }

  public List<Product> copyProductList() {
    return List.copyOf(products);
  }

  @Override
  public String toString() {
    return "StreamProducts{" +
           "products=" + products +
           '}';
  }
}
