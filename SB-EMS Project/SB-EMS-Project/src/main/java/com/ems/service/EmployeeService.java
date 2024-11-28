package com.ems.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ems.Model.Employee;
import com.ems.repo.EmployeeRepo;

@Service
public class EmployeeService {

    private EmployeeRepo employeeRepo;

    @Autowired
    public EmployeeService(EmployeeRepo employeeRepo) {
        this.employeeRepo = employeeRepo;
    }

    
    public void createEmployee(Employee employee) {
        employeeRepo.save(employee);
    }

    
    public void updateEmployee(Employee employee) {
        employeeRepo.save(employee);
    }

    
    public void deleteEmployeeById(int empId) {
        employeeRepo.deleteById(empId);
    }

    
    public Employee getEmployeeById(int empId) {
        return employeeRepo.findById(empId).orElse(null);
    }

    
    public List<Employee> getAllEmployees() {
        return (List<Employee>) employeeRepo.findAll();
    
    }
}
