package com.matrix.matrix.dto.request;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class InstituteRequest {
    
    private String instituteName;
    private String instituteLocation;
    private String phone;
}
