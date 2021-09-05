package com.company.masiu.patterns.dtoPattern;

import java.util.ArrayList;

import com.company.masiu.Print;

public class App {

  public static void main(String[] args) {
    ArrayList<Student> students = new ArrayList<>();
    students.add(new Student("Bob", 1));
    students.add(new Student("Tina", 2));
    students.add(new Student("Mia", 3));

    StudentDoaImpl studentDoaImpl = new StudentDoaImpl(students);

    Student s1 = studentDoaImpl.getStudent(1);
//    Print.print(s1.getName());
    studentDoaImpl.deleteStudent(1);

    for (Student student : studentDoaImpl.getStudents()) {
      Print.print(student.getName());
    }
    studentDoaImpl.updateStudent(new Student("Masiu", 3));
    for (Student student : studentDoaImpl.getStudents()) {
      Print.print(student.getName());
    }
  }
}
