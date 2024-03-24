package com.matrix.matrix.dto.request;

import java.util.List;

import com.matrix.matrix.model.Course;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class InstituteRequest {
    private Long iid;
    private String institute_name;
    private String institute_location;
     private List<Course> course;
}
