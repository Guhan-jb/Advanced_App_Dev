package com.matrix.matrix.service;

import com.matrix.matrix.dto.request.LoginRequest;
import com.matrix.matrix.dto.request.RegisterRequest;
import com.matrix.matrix.dto.response.LoginResponse;

public interface AuthService {
    String register(RegisterRequest registerRequest);

    LoginResponse login(LoginRequest loginRequest);
}
