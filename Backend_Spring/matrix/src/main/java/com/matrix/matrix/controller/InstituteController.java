package com.matrix.matrix.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.matrix.matrix.dto.request.InstituteRequest;
import com.matrix.matrix.model.Institute;
import com.matrix.matrix.service.impl.InstituteServiceImpl;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;



@RestController
@RequestMapping("/api/institute")
@RequiredArgsConstructor
@Tag(name = "Institute", description = "Endpoints for Institute")
public class InstituteController {
    private InstituteServiceImpl instituteServiceImpl;
    @PostMapping("/addinstitute")
    public String postMethodName(@RequestBody InstituteRequest instituteRequest) {
        
        return instituteServiceImpl.addInstitute(instituteRequest);
    }
    @GetMapping("/allIntitutes")
    public List<Institute> getMethodName() {
        return instituteServiceImpl.getAllInstitution();
    }
    
    

}
