package com.ems.repo;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.ems.Model.Employee;

@Repository
public interface EmployeeRepo extends CrudRepository<Employee, Integer>{
	
	public List<Employee>  findByEmpName(String empName);
	@Transactional
	public void deleteByEmpName (String empName);
	
	@Query("from Employee where empSalary > :esalary")
	public List<Employee>  findByEmpSalary(int esalary);
	
	@Modifying
	@Transactional
	@Query(" delete from Employee where empSalary > :esalary")
	public  void deleteByEmpSalary(int esalary);
	

	
}
