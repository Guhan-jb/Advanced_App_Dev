package com.matrix.matrix.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.matrix.matrix.dto.request.InstituteRequest;
import com.matrix.matrix.model.Institute;
import com.matrix.matrix.service.impl.InstituteServiceImpl;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;



@RestController
@RequestMapping("/api/institute")
@RequiredArgsConstructor
@Tag(name = "Institute", description = "Endpoints for Institute")
public class InstituteController {
    private final InstituteServiceImpl instituteServiceImpl;
    @PostMapping("/addinstitute")
    public String postMethodName(@RequestBody InstituteRequest instituteRequest) {
        
        return instituteServiceImpl.addInstitute(instituteRequest);
    }
    @GetMapping("/allIntitutes")
    public List<Institute> getMethodName() {
        return instituteServiceImpl.getAllInstitution();
    }
    @GetMapping("/id/{id}")
    @Operation(summary = "Get a institute by ID", description = "Allows all users to get all institute.")
    public Institute getByinstituteId(@PathVariable Long id) { 
        return instituteServiceImpl.getInstituteByID(id);
    }
    @GetMapping("/institute/name/{name}")
    @Operation(summary = "Get a institute by ID", description = "Allows all users to get all institute.")
    public List<Institute>  getByinstituteName(@PathVariable String name) { 
        return instituteServiceImpl.getInstituteByName(name);
    }
    @PutMapping("/editinstitute/{id}")
    @Operation(summary = "Edit institute", description = "Allows admin users to update a institute.")
    public String updateinstitute(@PathVariable Long id, @RequestBody InstituteRequest entity) { 
        return instituteServiceImpl.editInstitute(entity, id);
    }
    @DeleteMapping("/deleteinstitute/{id}")
    @Operation(summary = "Delete institute", description = "Allows admin users to delete a institute.")
    public String deleteinstitute(@PathVariable Long id) {
        return instituteServiceImpl.deleteInsitute(id);
    }
    

    

}
