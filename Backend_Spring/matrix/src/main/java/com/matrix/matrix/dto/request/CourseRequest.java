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
    private String course_name;
    private String course_description;
    private String course_duration;
    private String course_price; 
    private Institute institute;

}
