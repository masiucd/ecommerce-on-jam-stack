package com.company.masiu.designPatterns;

import java.util.Objects;

public class MySingleton {

  private static volatile MySingleton instance = null;
  private String name;

  private MySingleton() {
    if (instance != null) {
      throw new RuntimeException("Use getInstance() method to create");
    }
    this.name = "singleton";
  }

  public static MySingleton getInstance() {
    //    Lazy loaded!
    if (instance == null) {
      synchronized (MySingleton.class) {
        if (instance == null) {
          instance = new MySingleton();
        }
      }
    }
    return instance;
  }

  @Override
  public String toString() {
    return "MySingleton{" +
           "name='" + name + '\'' +
           '}';
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    MySingleton that = (MySingleton) o;
    return Objects.equals(name, that.name);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name);
  }
}
