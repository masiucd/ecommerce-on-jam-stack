package com.company.masiu.factoryMethodPattern;

public class BlogPage extends Website{

  @Override
  public void createWebsite() {
    pages.add(new PostPage());
    pages.add(new AboutPage());
    pages.add(new CommentPage());
    pages.add(new ContactPage());
  }
}
