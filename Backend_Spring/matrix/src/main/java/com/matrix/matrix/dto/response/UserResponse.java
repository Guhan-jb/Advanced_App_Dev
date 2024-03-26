package com.matrix.matrix.dto.response;


import com.matrix.matrix.enums.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class UserResponse {
    private Long id;
    private String name;
    private String email;
    private String phone;
    private String address;
    private Role role;
}
