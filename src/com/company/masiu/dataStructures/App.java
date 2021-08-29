package com.company.masiu.dataStructures;

import com.company.masiu.Print;

public class App {

  public static void main(String[] args) {
    Bst bst = new Bst();

    bst.insert(100);
    bst.insert(50);
    bst.insert(150);
    bst.insert(200);
    bst.insert(30);

//    bst.printPostOrder();
//    bst.printInOrder();
    bst.printPreorder();
  }
}
