package com.company.masiu.dataStructures.tree.bst;

import com.company.masiu.Print;
import com.company.masiu.dataStructures.tree.bst.BstNode;

public class Bst {

  BstNode root;

  public Bst() {
    this.root = null;
  }

  public void insert(int value) {
    root = inserRec(root, value);
  }

  public void printPostOrder() {
    printPostOrder(root, 0);
  }

  public void printInOrder() {
    printInOrder(root, 0);
  }

  public void printPreorder() {
    printPreorder(root, 0);
  }

  private BstNode inserRec(BstNode root, int value) {
    if (root == null) {
      root = new BstNode(value);
      return root;
    }
    if (value < root.value) {
      root.left = inserRec(root.left, value);
    } else {
      root.right = inserRec(root.right, value);
    }
    return root;
  }

  private void printPostOrder(BstNode node, int level) {
    if (node == null) {
      return;
    }

    printPostOrder(node.left, level + 1);
    printPostOrder(node.right, level + 1);
    Print.print(" ");
    Print.print(" ".repeat(level * 2) + node.value);
  }

  private void printInOrder(BstNode node, int level) {
    if (node == null) {
      return;
    }
    printInOrder(node.left, level + 1);
    Print.print(" ".repeat(level) + node.value + " ");
    printInOrder(node.right, level + 1);
  }

  private void printPreorder(BstNode node, int level) {
    if (node == null) {
      return;
    }
    Print.print(" ".repeat(level) + node.value);
    printPreorder(node.left, level + 1);
    printPreorder(node.right, level + 1);
  }

  @Override
  public String toString() {
    return "Bst{" +
           "root=" + root +
           '}';
  }
}
