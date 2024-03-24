package com.matrix.matrix.service;

import java.util.Optional;

import com.matrix.matrix.dto.request.CourseRequest;
import com.matrix.matrix.model.Course;

public interface CourseService {
    String addCourse(CourseRequest courseRequest);
    Optional<Course> getAllCourses();
    Optional<Course> getCourseByID(Long id);


}
