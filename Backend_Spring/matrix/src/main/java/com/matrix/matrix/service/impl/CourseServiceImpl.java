package com.matrix.matrix.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.matrix.matrix.dto.request.CourseRequest;
import com.matrix.matrix.model.Course;
import com.matrix.matrix.repository.CourseRepo;

import lombok.RequiredArgsConstructor;
@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public class CourseServiceImpl{
    
    private final CourseRepo courseRepo;
    public String addCourse(CourseRequest courseRequest) {
        var course=Course.builder()
        .cid(courseRequest.getCid())
        .courseName(courseRequest.getCourseName())
        .courseDescription(courseRequest.getCourseDescription())
        .courseDuration(courseRequest.getCourseDuration())
        .coursePrice(courseRequest.getCoursePrice())
        // .institute(courseRequest.getInstitute())
        .build();
        courseRepo.save(course);
        return "Course Added";
    }

 
    public List<Course> getAllCourses() {
        
        return courseRepo.findAll();
    }


    public Optional<Course> getCourseByID(Long id) {
        
        throw new UnsupportedOperationException("Unimplemented method 'getCourseByID'");
    }
    
}
