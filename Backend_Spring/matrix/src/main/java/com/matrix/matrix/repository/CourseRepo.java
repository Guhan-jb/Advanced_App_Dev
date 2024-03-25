package com.matrix.matrix.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.matrix.matrix.model.Course;
import java.util.List;


public interface CourseRepo extends JpaRepository<Course,Long> {
    public List<Course> findByCid(Long cid);
}
