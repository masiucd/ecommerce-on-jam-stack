package com.company.masiu;

import java.util.Arrays;
import java.util.List;

import com.company.masiu.collections.xs.MyList;
import com.company.masiu.collections.xs.MyMap;
import com.company.masiu.dto.ex.Student;
import com.company.masiu.dto.ex.StudentDao;
import com.company.masiu.dto.ex.StudentDaoImpl;
import com.company.masiu.streams.Product;
import com.company.masiu.streams.StreamProducts;

public class Main {

  public static void main(String[] args) {
//    StudentDao studentDao = new StudentDaoImpl();
//
//
//    for (Student student: studentDao.getAllStudents()){
//      print(student.toString());
//    }

    MyMap map = new MyMap();
    StreamProducts sp = new StreamProducts();
//    sp.productsWithUppercase();
    sp.collectNonCoolProducts();
    String[] xs = {"hello", "legia", "warszawa", "hello", "legia"};
    map.frequencyCounter(xs);
  }

  public static <T> void print(T a) {
    System.out.println(a);
  }

  public static <T> void printList(T[] xs) {
    System.out.println(Arrays.toString(xs));
  }
}