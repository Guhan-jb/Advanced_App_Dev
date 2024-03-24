package com.matrix.matrix.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
@AllArgsConstructor
public class LoginResponse {
    @Builder.Default
    private String accessToken = "";
}
