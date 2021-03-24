package com.company.masiu;

import java.util.Arrays;

import com.company.masiu.collections.xs.MyList;
import com.company.masiu.dto.ex.Student;
import com.company.masiu.dto.ex.StudentDao;
import com.company.masiu.dto.ex.StudentDaoImpl;

public class Main {

  public static void main(String[] args) {
    StudentDao studentDao = new StudentDaoImpl();


    for (Student student: studentDao.getAllStudents()){
      print(student.toString());
    }

  }

  public static <T> void print(T a) {
    System.out.println(a);
  }

  public static <T> void printList(T[] xs) {
    System.out.println(Arrays.toString(xs));
  }
}