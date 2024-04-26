package com.matrix.matrix.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.matrix.matrix.dto.request.InstituteRequest;
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
        if(instituteRequest!=null)
        {
        var institute=Institute.builder()
        .instituteName(instituteRequest.getInstituteName())
        .instituteLocation(instituteRequest.getInstituteLocation())
        .phone(instituteRequest.getPhone())
        .build();
        instituteRepo.save(institute);
        return "Instuite Added Successfully";
        }
        return "Institute not added";
    }
    public List<Institute> getAllInstitution()
    {
        return instituteRepo.findAll();
    }
    public Institute getInstituteByID(Long id) {
        return instituteRepo.findByIid(id);
    }
    public List<Institute> getInstituteByName(String name) {
       List<Institute> instituteList=instituteRepo.findByInstituteName(name);
       if (!instituteList.isEmpty()) {
        return instituteList;
       }
       return null;
    }
    public String editInstitute(InstituteRequest instituteRequest, Long id) {
        Institute institute=instituteRepo.findByIid(id);
        if(institute!=null)
        {
        var updatedInstitute=Institute.builder()
        .iid(id)
        .instituteName(instituteRequest.getInstituteName())
        .instituteLocation(instituteRequest.getInstituteLocation())
        .phone(instituteRequest.getPhone())
        .build();
        instituteRepo.save(updatedInstitute);
        return "Intutitute Updated";
        }   
        return "Institute Not Found!";
    }
    public String deleteInsitute(Long id) {
        Institute institute=instituteRepo.findByIid(id);
        if(institute!=null)
        {
        instituteRepo.deleteById(id);
        return "Intutitute deleted Successfully!";
        }   
        return "Institute Not Found!";
    }


}
