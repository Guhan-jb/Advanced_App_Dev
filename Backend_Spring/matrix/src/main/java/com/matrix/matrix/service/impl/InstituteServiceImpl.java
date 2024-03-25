package com.matrix.matrix.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.matrix.matrix.dto.request.CourseRequest;
import com.matrix.matrix.dto.request.InstituteRequest;
import com.matrix.matrix.model.Course;
import com.matrix.matrix.model.Institute;
import com.matrix.matrix.repository.InstituteRepo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public class InstituteServiceImpl {
    private final InstituteRepo instituteRepo;
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
    public Institute getInstituteByID(Long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getInstituteByID'");
    }
    public List<Institute> getInstituteByName(String name) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getInstituteByName'");
    }
    public String editInstitute(InstituteRequest entity, Long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'editInstitute'");
    }
    public String deleteInsitute(Long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteInsitute'");
    }


}
