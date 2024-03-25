package com.matrix.matrix.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.matrix.matrix.model.Institute;
@Repository
public interface InstituteRepo extends JpaRepository<Institute,Long> {

}
