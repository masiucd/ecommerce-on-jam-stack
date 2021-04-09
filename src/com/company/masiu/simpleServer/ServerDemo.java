package com.company.masiu.simpleServer;

import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;

//https://docs.oracle.com/javase/8/docs/jre/api/net/httpserver/spec/com/sun/net/httpserver/package-summary.html
public class ServerDemo {

  public static void main(String[] args) throws Exception {
    HttpServer server = HttpServer.create(new InetSocketAddress(5000), 0);
    server.createContext("/", new MyHandler());
    server.createContext("/foo",new AnotherHandler());
    server.setExecutor(null);
    server.start();
  }

  static class MyHandler implements HttpHandler {

    @Override
    public void handle(HttpExchange exchange) throws IOException {
      String responseString = "Hello Marcelloo, welcome to simple server with Java";
      exchange.sendResponseHeaders(200, responseString.length());
      OutputStream os = exchange.getResponseBody();
      os.write(responseString.getBytes());
      os.close();
    }
  }

  static class AnotherHandler implements HttpHandler {

    @Override
    public void handle(HttpExchange exchange) throws IOException {
      String res = "Onother page";
      exchange.sendResponseHeaders(200, res.length());
      OutputStream os = exchange.getResponseBody();
      os.write(res.getBytes());
      os.close();
    }
  }
}
