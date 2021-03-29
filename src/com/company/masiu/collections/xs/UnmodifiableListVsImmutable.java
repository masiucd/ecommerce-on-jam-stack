package com.company.masiu.collections.xs;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

public class UnmodifiableListVsImmutable {

  HashMap<String, Integer> mutableCountryToPopulation;
  Map<String, Integer> unMutableCountryToPopulation;

  public UnmodifiableListVsImmutable() {
    this.mutableCountryToPopulation = new HashMap<>();
    this.mutableCountryToPopulation.put("UK", 67);
    this.mutableCountryToPopulation.put("USA", 328);

    this.unMutableCountryToPopulation = Collections.unmodifiableMap(this.mutableCountryToPopulation);
  }

  public void addToMutableCollection(String country, int population) {
//    This will not work!
    this.mutableCountryToPopulation.put(country, population);
  }

  public Map<String, Integer> countryToPopulation() {
    Map<String, Integer> map = Map.of("UK", 600, "USA", 22);
    System.out.println("countryToPopulation "+ map);
    return map;
  }
}
