package com.company.masiu.factoryMethodPattern;

public class WebsiteFactory {
  public static Website getWebsite(String siteType) {
    switch (siteType) {
      case "blog": {
        return new BlogPage();
      }
      case "shop": {
        return new Shop();
      }
      default: {
        return null;
      }
    }
  }
}
