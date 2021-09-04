package com.company.masiu.dataStructures.tree.bst.domTree;

public class DomTree {

  private DomNode root;
  private String result;

  public DomTree() {
    this.root = null;
    this.result = "";
  }

  DomNode setRoot(String key) {
    if (root == null) {
      root = new DomNode(key);
      return root;
    }
    return root;
  }

  public String print() {
    this.traverse(root, 0);
    return result;
  }

  private void addNodeToResult(DomNode domNode, int level) {
    if (this.result.length() == 0) {
      this.result += domNode.getKey();
    } else {
      this.result += "\n" + " ".repeat(level * 2) + domNode.getKey();
    }
  }

  private void traverse(DomNode domNode, int level) {
    this.addNodeToResult(domNode, level);
    if (domNode.getChildren().size() > 0) {
      domNode.getChildren().forEach(node -> traverse(node, level + 1));
    }
  }
}
