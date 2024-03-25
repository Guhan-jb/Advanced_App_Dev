package com.matrix.matrix.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.matrix.matrix.dto.request.InstituteRequest;
import com.matrix.matrix.model.Institute;
import com.matrix.matrix.repository.CourseRepo;
import com.matrix.matrix.repository.InstituteRepo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public class InstituteServiceImpl {
    private final InstituteRepo instituteRepo;
    private final CourseRepo courseRepo;
    public String addInstitute(InstituteRequest instituteRequest)
    {

        var institute=Institute.builder()
        // .iid(instituteRequest.getIid())
        .instituteName(instituteRequest.getInstituteName())
        .instituteLocation(instituteRequest.getInstituteLocation())
        // .course(courseRepo.findByCid((long)1))
        .build();

        instituteRepo.save(institute);
        return "Instuite Added Successfully";
    }
    public List<Institute> getAllInstitution()
    {
        return instituteRepo.findAll();
    }

}
