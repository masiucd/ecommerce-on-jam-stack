package com.company.masiu.dataStructures.tree.domTree;

import com.company.masiu.Print;

public class App {

  public static void main(String[] args) {
    DomTree domTree = new DomTree();
    DomNode html = domTree.setRoot("HTML");
    DomNode nav = html.addChild("nav");
    DomNode footer = html.addChild("footer");
    DomNode main = html.addChild("footer");
    DomNode div1 = main.addChild("footer");
    DomNode div2 = main.addChild("footer");
    DomNode h1 = main.addChild("h1 -- title");
    DomNode p1 = div1.addChild("p -- paragraph");
    DomNode ul = div1.addChild("ul --unordered list");
    DomNode li1 = ul.addChild("li --apple");
    DomNode li2 = ul.addChild("li --orange");
    DomNode li3 = ul.addChild("li --banana");

    String dom = domTree.print();
    Print.print(dom);
  }
}
