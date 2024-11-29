package com.ems.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ems.model.Employee;
import com.ems.repo.EmployeeRepo;
import com.ems.service.DepartmentService;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
//@CrossOrigin(origins = "http://localhost:3000/")
public class EmployeeController {
	private EmployeeRepo repo;
	@Autowired
	private DepartmentService departmentService;

	@Autowired
	public EmployeeController(EmployeeRepo repo) {
		this.repo = repo;
	}

	@PostMapping("/create-employee")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	// @RequestMapping(method = RequestMethod.POST)
	public void doInsert(@RequestBody Employee employee) {
		System.out.println(employee);
		repo.save(employee);

	}

	@PutMapping("/update-employee")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	// @RequestMapping(method = RequestMethod.POST)
	public void doUpdate(@RequestBody Employee employee) {
		repo.save(employee);

	}

	@DeleteMapping("/delete-employee/{id}")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public void doDelete(@PathVariable("id") int id) {
		repo.deleteById(id);

	}

	@DeleteMapping("/delete-employee-name/{empName}")
	public void doDelete(@PathVariable("empName") String empName) {
		repo.deleteByEmpName(empName);

	}

	@DeleteMapping("/delete-employee-salary/{empSalary}")
	public void deleteBySalary(@PathVariable("empSalary") int empSalary) {
		repo.deleteByEmpSalary(empSalary);

	}

	@GetMapping("/find-employee/{id}")
	@PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
	public Employee doFind(@PathVariable("id") int id) {
		return repo.findById(id).get();

	}

	@GetMapping("/find-employee-name/{empName}")
	public List<Employee> doFind(@PathVariable("empName") String empName) {
		System.out.println(empName);
		return repo.findByEmpName(empName);

	}

	@GetMapping("/find-employee-salary/{empSalary}")
	public List<Employee> doFindBySalary(@PathVariable("empSalary") int empSalary) {
		return repo.findByEmpSalary(empSalary);

	}

	@GetMapping("/findall-employee")
	@PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
	public List<Employee> doFind() {
		return (List<Employee>) repo.findAll();

	}

	@GetMapping("/get-dept")
	public String getDepartment() {
		return departmentService.getDepartment();
	}

	@GetMapping("/get-dept-details/{dno}")
	public String getDepartmentDetails(@PathVariable("dno") int dno) {
		return departmentService.getDeptDetails(dno);
	}
}
