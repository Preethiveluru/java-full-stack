package com.ems.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.ems.Model.Department;
import com.ems.service.DepartmentService;

@RestController
@CrossOrigin

public class DepartmentController {

    private DepartmentService departmentService;

    @Autowired
    public DepartmentController(DepartmentService departmentService) {
        this.departmentService = departmentService;
    }

    @PostMapping("/create-department")
    public void createDepartment(@RequestBody Department department) {
        departmentService.createDepartment(department);
    }

    @PutMapping("/update-department")
    public void updateDepartment(@RequestBody Department department) {
        departmentService.updateDepartment(department);
    }

    @DeleteMapping("/delete-department/{deptId}")
    public void deleteDepartment(@PathVariable("deptId") int deptId) {
        departmentService.deleteDepartment(deptId);
    }

    @GetMapping("/find-department/{deptId}")
    public Department getDepartmentById(@PathVariable("deptId") int deptId) {
        return departmentService.DepartmentById(deptId);
    }

    @GetMapping("/findall-department")
    public List<Department> getAllDepartments() {
        return departmentService.getAllDepartments();
    }
}
