package com.ems.repo;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.ems.model.Employee;

@Repository
public interface EmployeeRepo extends CrudRepository<Employee, Integer> {
	
	public List<Employee> findByEmpName(String empName);
	@Transactional
	public void deleteByEmpName(String EmpName);
	
	@Query("from Employee where empSalary > :esalary")
	public List<Employee> findByEmpSalary(int esalary);
	
	@Transactional
	@Modifying
	@Query("Delete from Employee where empSalary = :empSalary")
	public void deleteByEmpSalary(int empSalary);

}
