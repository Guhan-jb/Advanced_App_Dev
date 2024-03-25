package com.matrix.matrix.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.matrix.matrix.dto.request.CourseRequest;
import com.matrix.matrix.model.Course;
import com.matrix.matrix.service.impl.CourseServiceImpl;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;



@RestController
@RequestMapping("/api/courses")
@RequiredArgsConstructor
@Tag(name = "Courses", description = "Endpoints for Courses")
public class CourseController {
    private final CourseServiceImpl courseService;
    @PostMapping("/addcourse")
    public String postMethodName(@RequestBody CourseRequest courseRequest) {
        return courseService.addCourse(courseRequest);
    }
    @GetMapping("/allcourses")
    public List<Course> getAllCourses() {
        return courseService.getAllCourses();
    }
    

}
