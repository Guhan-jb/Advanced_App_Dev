package com.matrix.matrix.dto.request;

import com.matrix.matrix.model.Institute;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class CourseRequest {
    private Long cid;
    private String courseName;
    private String courseDescription;
    private String courseDuration;
    private String coursePrice; 

}
