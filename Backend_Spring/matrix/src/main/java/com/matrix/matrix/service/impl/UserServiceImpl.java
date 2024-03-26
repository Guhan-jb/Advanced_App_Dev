package com.matrix.matrix.service.impl;



import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.matrix.matrix.dto.request.UserRequest;
import com.matrix.matrix.model.User;
import com.matrix.matrix.repository.UserRepo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public class UserServiceImpl{
    private final UserRepo userRepository;
    private final PasswordEncoder passwordEncoder;
    public User createUser(UserRequest registerRequest) {
        User user = User.builder()
                .name(registerRequest.getName())
                .email(registerRequest.getEmail())
                .password(passwordEncoder.encode(registerRequest.getPassword()))
                .phone(registerRequest.getPhone())
                .address(registerRequest.getAddress())
                .role(registerRequest.getRole())
                .build();
        return userRepository.save(user);
    }

    
    public User updateUser(Long userId, UserRequest userUpdateRequest) {
        User user = userRepository.findById(userId).orElseThrow();
        user.setName(userUpdateRequest.getName());
        user.setEmail(userUpdateRequest.getEmail());
        user.setPassword(passwordEncoder.encode(userUpdateRequest.getPassword()));
        user.setPhone(userUpdateRequest.getPhone());
        user.setAddress(userUpdateRequest.getAddress());
        user.setRole(userUpdateRequest.getRole());
        return userRepository.save(user);
    }

    
    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }

    
    public User getUserById(Long userId) {
        return userRepository.findById(userId).orElseThrow();
    }
}
