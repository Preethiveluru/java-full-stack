package com.ems.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;




@Entity
@Table(name="employee")

public class Employee {
	
	@Id
	@Column(name="eid")
	private int empId;
	
	@Column(name="ename")
	private String empName;
	
	@Column(name="esalary")
	private int empSalary;

	public int getEmpId() {
		return empId;
	}

	public void setEmpId(int empId) {
		this.empId = empId;
	}

	public String getEmpName() {
		return empName;
	}

	public void setEmpName(String empName) {
		this.empName = empName;
	}

	public int getEmpSalary() {
		return empSalary;
	}

	public void setEmpSalary(int empSalary) {
		this.empSalary = empSalary;
	}
	
	
}
