package com.company.masiu.patterns.dtoPattern;

import java.util.List;

public interface StudentDto {

  List<Student> getStudents();

  Student getStudent(int id);

  boolean updateStudent(Student student);

  boolean deleteStudent(int id);
}
