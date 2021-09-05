package com.company.masiu.dataStructures.tree.domTree;

import java.util.ArrayList;

public class DomNode {

  private final String key;
  private ArrayList<DomNode> children;

  public DomNode(String key) {
    this.key = key;
    this.children = new ArrayList<>();
  }

  public DomNode addChild(String key) {
    DomNode newChildNode = new DomNode(key);
    children.add(newChildNode);
    return newChildNode;
  }

  public String getKey() {
    return key;
  }

  public ArrayList<DomNode> getChildren() {
    return children;
  }
}

