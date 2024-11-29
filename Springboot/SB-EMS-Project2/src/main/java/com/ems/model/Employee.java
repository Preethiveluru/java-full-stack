package com.ems.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tbl_employee1")
public class Employee {
	@Id
	@Column(name = "eid")
	private int id;

	@Column(name = "ename")
	private String empName;

	@Column(name = "salary")
	private int empSalary;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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
		return "Employee [id=" + id + ", empName=" + empName + ", empSalary=" + empSalary + "]";
	}

}
