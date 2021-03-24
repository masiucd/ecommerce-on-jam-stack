package com.company.masiu.dto.ex;

import java.util.ArrayList;
import java.util.List;

public class StudentDaoImpl implements StudentDao {

  List<Student> students;

  public StudentDaoImpl() {
    students = new ArrayList<>();
    students.add(new Student("Mike", "Smith", 0));
    students.add(new Student("Tina", "Jonsson", 1));
  }

  @Override
  public List<Student> getAllStudents() {
    return this.students;
  }

  @Override
  public Student getStudent(int rollNo) {
    return students.get(rollNo);
  }

  @Override
  public void updateStudent(Student student) {
    students.get(student.getRollNo()).setFirstName(student.getFirstName());
    students.get(student.getRollNo()).setLastName(student.getFirstName());
    System.out.println("Student: Roll no " + student.getRollNo() + " has been updated");
  }

  @Override
  public void deleteStudent(Student student) {
    students.remove(student.getRollNo());
    System.out.println("Student: Roll no " + student.getRollNo() + " has been removed");
  }

  @Override
  public String toString() {
    return "StudentDaoImpl{" +
           "students=" + students +
           '}';
  }
}
