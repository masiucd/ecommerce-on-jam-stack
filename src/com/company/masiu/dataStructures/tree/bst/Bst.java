package com.company.masiu.dataStructures.tree.bst;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;

import com.company.masiu.Print;

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

  public void dfsPreOrder() {
    dfsPreOrder(root);
  }

  public ArrayList<Integer> bfs() {
    BstNode current = root;
    Queue<BstNode> queue = new LinkedList<>();
    queue.add(current);
    ArrayList<Integer> visited = new ArrayList<>();
    while (!queue.isEmpty()) {
      current = queue.remove();
      visited.add(current.value);
      if (current.left != null) queue.add(current.left);
      if (current.right != null) queue.add(current.right);
    }
    return visited;
  }

  private ArrayList<Integer> dfsPreOrder(BstNode node) {
    ArrayList<Integer> visited = new ArrayList<>();
    this.traversePreOrder(node, visited);
    Print.print(visited);
    return visited;
  }

  private void traversePreOrder(BstNode node, ArrayList<Integer> visited) {
    visited.add(node.value);
    if (node.left != null) {
      traversePreOrder(node.left, visited);
    }
    if (node.right != null) {
      traversePreOrder(node.right, visited);
    }
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
