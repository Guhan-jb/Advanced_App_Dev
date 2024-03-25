package com.matrix.matrix.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.matrix.matrix.model.Course;
import java.util.List;


public interface CourseRepo extends JpaRepository<Course,Long> {
    public Course findByCid(Long cid);
    public List<Course> findByCourseName(String courseName);
}
