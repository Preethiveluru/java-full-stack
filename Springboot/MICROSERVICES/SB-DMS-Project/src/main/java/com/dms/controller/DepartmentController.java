package com.dms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dms.Model.Department;
import com.dms.repo.DepartmentRepo;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@CrossOrigin
public class DepartmentController {  

    private DepartmentRepo repo;
    
    @Autowired
    public DepartmentController(DepartmentRepo repo) {
        this.repo = repo; 
    }
    
    
    @PostMapping("/create-department")
    public void doInsert(@RequestBody Department department) {
        repo.save(department);    
    }
    
    
    @PutMapping("/update-department")
    public void doUpdate(@RequestBody Department department) {
        repo.save(department);
    }
    
   
    @DeleteMapping("/delete-department/{deptId}")
    public void doDelete(@PathVariable("deptId") int deptId) {
        repo.deleteById(deptId);
    }
    
  
    @GetMapping("/read-department/{deptId}")
    public Department doRead(@PathVariable("deptId") int deptId) {
        return repo.findById(deptId).orElse(null);
    }
    
    
    @GetMapping("/readAll-departments")
    public List<Department> doReadAll() {
        return (List<Department>) repo.findAll();
    }
    
    @GetMapping("/get-dept")
    public String getDepartment() {
        return  "data from department";
    }
    
    @GetMapping("/get-dept-details/{deptId}")
    public String getDepartmentdetails(@PathVariable("deptId") int deptId) {
       Department dep =repo.findById(deptId).get();
       return dep.getDeptId()+""+dep.getDeptName();
    }
    
}
