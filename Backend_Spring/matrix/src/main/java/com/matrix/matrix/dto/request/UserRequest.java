package com.matrix.matrix.dto.request;

import com.matrix.matrix.enums.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class UserRequest {
    private String name;
    private String email;
    private String password;
    private String phone;
    private String address;
    private Role role;
}
