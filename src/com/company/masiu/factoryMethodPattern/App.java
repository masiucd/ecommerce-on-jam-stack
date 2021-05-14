package com.company.masiu.factoryMethodPattern;

public class App {

  public static void main(String[] args) {
    Website site = WebsiteFactory.getWebsite("blog");
    System.out.println(site.getPages());

    Website shop = WebsiteFactory.getWebsite("shop");
    System.out.println(shop.getPages());
  }
}
