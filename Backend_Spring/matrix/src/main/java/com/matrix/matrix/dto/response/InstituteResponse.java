package com.matrix.matrix.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
@Data
@Builder
@AllArgsConstructor
public class InstituteResponse {
    private Long iid;
    private String institute_name;
    private String institute_location;
    //  private List<Course> course;
}
