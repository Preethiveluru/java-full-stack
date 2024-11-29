package com.ems.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;




@Entity
@Table(name="employee")

public class Employee {
	
	
	
	@Id
	@Column(name="eid")
	private int empId;
	
	@Column(name="ename",length=20)
	private String empName;
	
	@Column(name="esalary")
	private int empSalary;

	@ManyToOne
	@JoinColumn(name = "did")
	private Department department;
	
	public Department getDepartment() {
		return department;
	}

	public void setDepartment(Department department) {
		this.department = department;
	}

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

	@Override
	public String toString() {
		return "Employee [empId=" + empId + ", empName=" + empName + ", empSalary=" + empSalary + ", department="
				+ department + "]";
	}
	
	
	
}
