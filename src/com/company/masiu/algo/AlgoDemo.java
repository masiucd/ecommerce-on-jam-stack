package com.company.masiu.algo;

public class AlgoDemo {

  public static void main(String[] args) {
    Algo algo = new Algo();

    int[] coins = {1, 2, 5};
    int res = algo.nonConstructibleChange(coins);
    print(res);
  }

  private static <T> void print(T value) {
    System.out.println(value);
  }
}
