package com.matrix.matrix.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.matrix.matrix.model.Course;

public interface CourseRepo extends JpaRepository<Course,Long> {

}
