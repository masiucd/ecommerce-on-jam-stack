package com.company.masiu.collections.xs;

import java.util.HashMap;
import java.util.Map;

public class MyMap {

  private Map<Integer, Thing> mapStore = new HashMap<>();

  public void addThing(final Thing thingToAdd) {
    int id = thingToAdd.getId();

    if (mapStore.containsKey(id)) {
      throw new IllegalArgumentException("Unable to add product dublicate id")
    }

    insertToMapStore(id, thingToAdd);
  }

  private void insertToMapStore(int id, Thing thing) {
    mapStore.put(id, thing);
  }
@Override
  public Thing lookupById(int id) {
    return mapStore.get(id);
  }
}
