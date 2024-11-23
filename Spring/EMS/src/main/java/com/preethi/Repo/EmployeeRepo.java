package com.preethi.Repo;

import java.util.LinkedList;
import java.util.List;

import com.preethi.bean.Employee;

 
public class EmployeeRepo {

    private List<Employee> employeeList = new LinkedList<>();

    
    public boolean addEmployee(Employee employee) {
        return employeeList.add(employee);
    }

  
    public boolean updateEmployee(Employee employee) {
        for (Employee emp : employeeList) {
            if (emp.getEid() == employee.getEid()) {  
                emp.setEname(employee.getEname());
                emp.setESalary(employee.getESalary());
                return true;
            }
        }
        return false; 
    }

   
    public boolean deleteEmployee(int eid) {
        return employeeList.removeIf(emp -> emp.getEid() == eid);  
    }

    
    public Employee findEmployeeById(int eid) {
        for (Employee emp : employeeList) {
            if (emp.getEid() == eid) {  
                return emp;
            }
        }
        return null;
        }

  
    public List<Employee> getAllEmployees() {
        return employeeList;
    }
}
