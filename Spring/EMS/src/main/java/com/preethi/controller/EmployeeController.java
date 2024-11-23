package com.preethi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.preethi.Repo.EmployeeRepo;
import com.preethi.bean.Employee;

@Controller
public class EmployeeController {

    @Autowired
    EmployeeRepo emprepo;

    @RequestMapping("/employee")
    public ModelAndView loadEmployeeForm() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("EmployeeForm"); 
        return mv;
    }

    @RequestMapping("/employee-data")
    public ModelAndView handleEmployeeActions(@RequestParam("btn") String btn,
                                              @ModelAttribute("employee") Employee employee) {

        ModelAndView mv = new ModelAndView();
        mv.setViewName("EmployeeOutput"); 

        switch (btn) {
            case "Insert":
                if (emprepo.addEmployee(employee)) {
                    mv.addObject("message", "Employee inserted successfully!");
                } else {
                    mv.addObject("message", "Failed to insert employee.");
                }
                break;

            case "Update":
                if (emprepo.updateEmployee(employee)) {
                    mv.addObject("message", "Employee updated successfully!");
                } else {
                    mv.addObject("message", "Failed to update employee. Employee not found.");
                }
                break;

            case "Delete":
                if (emprepo.deleteEmployee(employee.getEid())) {
                    mv.addObject("message", "Employee deleted successfully!");
                } else {
                    mv.addObject("message", "Failed to delete employee. Employee not found.");
                }
                break;

            case "Find":
                Employee foundEmployee = emprepo.findEmployeeById(employee.getEid());
                if (foundEmployee != null) {
                    mv.addObject("message", "Employee found: " + foundEmployee);
                } else {
                    mv.addObject("message", "Employee not found.");
                }
                break;

            case "FindAll":
                mv.addObject("message", "Displaying all employees: " + emprepo.getAllEmployees());
                break;
        }
        return mv;
    }
}
