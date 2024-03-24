package com.matrix.matrix.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.matrix.matrix.model.User;

public interface UserRepo extends JpaRepository<User,Long> {

    Optional<User> findByEmail(String email);

}
