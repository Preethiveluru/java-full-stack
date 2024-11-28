package com.ems.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ems.Model.Department;
import com.ems.repo.DepartmentRepo;

@Service
public class DepartmentService {

    private DepartmentRepo departmentRepo;

    @Autowired
    public DepartmentService(DepartmentRepo departmentRepo) {
        this.departmentRepo = departmentRepo;
    }

    public void createDepartment(Department department) {
        departmentRepo.save(department);
    }

    public void updateDepartment(Department department) {
        departmentRepo.save(department);
    }

    public void deleteDepartment(int deptId) {
        departmentRepo.deleteById(deptId);
    }

    public Department DepartmentById(int deptId) {
        return departmentRepo.findById(deptId).orElse(null);
    }

    public List<Department> getAllDepartments() {
        return (List<Department>) departmentRepo.findAll();
    }
}
