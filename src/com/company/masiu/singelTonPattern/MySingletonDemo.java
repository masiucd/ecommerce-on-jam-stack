package com.company.masiu.singelTonPattern;

public class MySingletonDemo {
  public static void main(String[] args){
    MySingleton instance = MySingleton.getInstance();

    System.out.println(instance.hashCode());
    System.out.println(instance.hashCode());
    System.out.println(instance.hashCode());
  }
}
