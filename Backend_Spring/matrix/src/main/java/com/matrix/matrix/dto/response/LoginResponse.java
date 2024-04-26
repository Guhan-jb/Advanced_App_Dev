package com.matrix.matrix.dto.response;

import com.matrix.matrix.enums.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
@AllArgsConstructor
public class LoginResponse {
    @Builder.Default
    private String accessToken = "";
    private Long uid;
    private Role role;
}
