package com.company.masiu.collections.xs;

import java.util.HashMap;
import java.util.Map;

public class MyMap {

  private Map<Integer, Thing> mapStore = new HashMap<>();

  public void addThing(final Thing thingToAdd) {
    int id = thingToAdd.getId();

    if (mapStore.containsKey(id)) {
      throw new IllegalArgumentException("Unable to add product dublicate id");
    }

    insertToMapStore(id, thingToAdd);
  }

  private void insertToMapStore(int id, Thing thing) {
    mapStore.put(id, thing);
  }

  private int increaseThinhId() {
    return mapStore.size() + 1;
  }

  public Thing lookupById(int id) {
    return mapStore.get(id);
  }

  public void clearStore() {
    mapStore.clear();
  }

  public void printThings() {
    for (Map.Entry<Integer, Thing> entry : mapStore.entrySet()) {
      String printString = String.format("id=%d title=%s weight=%d isCool%b", entry.getKey(), entry.getValue().title, entry.getValue().weight, entry.getValue().isCool);
      System.out.println(printString);
    }
  }
}
