package com.matrix.matrix.dto.request;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class InstituteRequest {
    // private Long iid
    private String instituteName;
    private String instituteLocation;
    // private Long cid;
}
