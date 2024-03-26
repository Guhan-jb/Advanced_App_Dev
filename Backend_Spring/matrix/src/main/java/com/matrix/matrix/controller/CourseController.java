package com.matrix.matrix.controller;

import java.util.List;

import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.matrix.matrix.dto.request.CourseRequest;
import com.matrix.matrix.model.Course;
import com.matrix.matrix.service.impl.CourseServiceImpl;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;





@RestController
@RequestMapping("/api/courses")
@RequiredArgsConstructor
@Tag(name = "Courses", description = "Endpoints for Courses")
public class CourseController {

    private final CourseServiceImpl courseService;
    @ApiRoleAccessNotes
    @Secured("Admin")
    @PostMapping("/addcourse")
    @Operation(summary = "Register a new Course", description = "Allows Admin to create a course.")
    public String postMethodName(@RequestBody CourseRequest courseRequest) {
        return courseService.addCourse(courseRequest);
    }
    @GetMapping("/allcourses")
    @Operation(summary = "Get all courses", description = "Allows all users to get all course.")
    public List<Course> getAllCourses() {
        return courseService.getAllCourses();
    }
    
    @GetMapping("/course/{id}")
    @Operation(summary = "Get a course by ID", description = "Allows all users to get all course.")
    public Course getByCourseId(@PathVariable Long id) { 
        return courseService.getCourseByID(id);
    }
    @GetMapping("/course/{name}")
    @Operation(summary = "Get a course by ID", description = "Allows all users to get all course.")
    public List<Course>  getByCourseName(@PathVariable String name) { 
        return courseService.getCourseByName(name);
    }
    @PutMapping("editcourse/{id}")
    @Operation(summary = "Edit course", description = "Allows admin users to update a course.")
    public String updateCourse(@PathVariable Long id, @RequestBody CourseRequest entity) { 
        return courseService.editCourse(entity, id);
    }
    @DeleteMapping("/deletecourse/{id}")
    @Operation(summary = "Delete course", description = "Allows admin users to delete a course.")
    public String deleteCourse(@PathVariable Long id, @RequestBody CourseRequest entity) {
        return courseService.deleteCourse(id);
    }
    

}
