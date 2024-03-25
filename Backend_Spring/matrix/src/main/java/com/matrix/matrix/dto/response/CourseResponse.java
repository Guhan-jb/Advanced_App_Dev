package com.matrix.matrix.dto.response;

import com.matrix.matrix.model.Institute;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
@Data
@Builder
@AllArgsConstructor
public class CourseResponse {
    private Long cid;
    private String courseName;
    private String courseDescription;
    private String courseDuration;
    private String coursePrice; 
    private Institute institute;
}
