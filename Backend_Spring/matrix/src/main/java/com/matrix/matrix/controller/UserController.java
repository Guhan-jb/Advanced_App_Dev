package com.matrix.matrix.controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.matrix.matrix.dto.request.UserRequest;
import com.matrix.matrix.model.User;
import com.matrix.matrix.service.impl.UserServiceImpl;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
@Tag(name = "User", description = "Endpoints for Users")
public class UserController {
    private final UserServiceImpl userService;

    @PostMapping("/users")
     @Operation(summary = "Register a new User", description = "Allows user to create a course.")
    public ResponseEntity<User> createUser(@RequestBody UserRequest registerRequest) {
        User user = userService.createUser(registerRequest);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @PutMapping("/users/{userId}")
    @Operation(summary = "Update a user by ID", description = "Allows user to Update user details using ID.")
    public ResponseEntity<User> updateUser(@PathVariable Long userId,
    @RequestBody UserRequest userUpdateRequest) {
        User updatedUser = userService.updateUser(userId, userUpdateRequest);
        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    }
    
    @DeleteMapping("/users/{userId}")
    @Operation(summary = "Delete a user by ID", description = "Allows user to Delete user details using ID.")
    public ResponseEntity<Void> deleteUser(@PathVariable Long userId) {
        userService.deleteUser(userId);
        return ResponseEntity.noContent().build();
    }
    @GetMapping("/users/{userId}")
    @Operation(summary = "Get a user by ID", description = "Allows user to Get user details using ID.")
    public ResponseEntity<User> getUserById(@PathVariable Long userId) {
        User user = userService.getUserById(userId);
        return ResponseEntity.ok(user);
    }
}
