package com.ems.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.ems.Model.Employee;
import com.ems.service.EmployeeService;

@RestController
@CrossOrigin(origins="http://localhost:3000")

public class EmployeeController {

    private EmployeeService employeeService;

    @Autowired
    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @PostMapping("/create")
    public void createEmployee(@RequestBody Employee employee) {
    	System.out.println(employee);
        employeeService.createEmployee(employee);
    }

    @PutMapping("/update")
    public void updateEmployee(@RequestBody Employee employee) {
        employeeService.updateEmployee(employee);
    }

    @DeleteMapping("/delete/{empId}")
    public void deleteEmployeeById(@PathVariable("empId") int empId) {
        employeeService.deleteEmployeeById(empId);
    }

    @GetMapping("/get/{empId}")
    public Employee getEmployeeById(@PathVariable("empId") int empId) {
    	Employee emp =employeeService.getEmployeeById(empId);
    	System.out.println(emp);
        return emp;
    }

    @GetMapping("/findall")
    public List<Employee> getAllEmployees() {
    	System.out.println("inside findall java");
        return employeeService.getAllEmployees();
    }

    
}
