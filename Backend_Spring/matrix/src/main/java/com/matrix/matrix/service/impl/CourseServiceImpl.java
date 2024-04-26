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

    //POST
    public String addCourse(CourseRequest courseRequest) {
        var course=Course.builder()
        .cid(courseRequest.getCid())
        .courseName(courseRequest.getCourseName())
        .courseDescription(courseRequest.getCourseDescription())
        .courseDuration(courseRequest.getCourseDuration())
        .coursePrice(courseRequest.getCoursePrice())
        .build();
        courseRepo.save(course);
        return "Course Added";
    }

  //GET
  //GETALL
    public List<Course> getAllCourses() {
        
        return courseRepo.findAll();
    }
    //GETBYID
    public Optional<Course> getCourseByID(Long Id)
    {
        Optional<Course> course=courseRepo.findById(Id);
        if(course!=null)
        {
            return course;
        }
        else
        {
            return null;
        }
    }
    //GET COURSE by NAME
    public List<Course> getCourseByName(String name)
    {
        List<Course> course=courseRepo.findByCourseName(name);
        if(!course.isEmpty())
        {
            return course;
        }
        else
        {
            return null;
        }
    }
    public String editCourse(CourseRequest courseRequest, Long id)
    {
        Course course=courseRepo.findByCid(id);
        if(course!=null)
        {
            var updatedCourse=Course.builder()
            .cid(courseRequest.getCid())
            .courseName(courseRequest.getCourseName())
            .courseDescription(courseRequest.getCourseDescription())
            .courseDuration(courseRequest.getCourseDuration())
            .coursePrice(courseRequest.getCoursePrice())
            .build();
            courseRepo.save(updatedCourse);
            return "Course Updated";
        }
        return "Course does not exits in DB!";
    }
    public String deleteCourse(Long id)
    {
        Course course=courseRepo.findByCid(id);
        if(course!=null)
        {
            courseRepo.deleteById(id);
            return "Deleted successfully";
        }
        return "Course not found!";
    }
    
}
