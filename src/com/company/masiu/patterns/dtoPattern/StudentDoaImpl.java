package com.company.masiu.patterns.dtoPattern;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class StudentDoaImpl implements StudentDto {

  ArrayList<Student> students;

  public StudentDoaImpl(ArrayList<Student> students) {
    this.students = students;
  }

  @Override
  public List<Student> getStudents() {
    return students;
  }

  @Override
  public Student getStudent(int id) {
    return students.stream().filter(s -> s.getId() == id).collect(Collectors.toList()).get(0);
  }

  @Override
  public boolean updateStudent(Student student) {
    Student studentToUpdate = getStudent(student.getId());
    if (studentToUpdate != null) {
      studentToUpdate.setName(student.getName());
      return true;
    }
    return false;
  }

  @Override
  public boolean deleteStudent(int id) {
    students.remove(id - 1);
    return true;
  }
}
