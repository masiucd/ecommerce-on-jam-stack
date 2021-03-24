package com.company.masiu.dto.ex;

import java.util.List;

import com.company.masiu.dto.ex.Student;

public interface StudentDao {
  public List<Student> getAllStudents();
  public Student getStudent(int rollNo);
  public void updateStudent(Student student);
  public void deleteStudent(Student student);
}