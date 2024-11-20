package com.spring;

public class Employee {
	private int eid;
	private String ename;
	private int esalary;
	private Address address;
	private Department department;



	@Override
	public String toString() {
		return "Employee [eid=" + eid + ", ename=" + ename + ", esalary=" + esalary + ", address=" + address
				+ ", department=" + department + "]";
	}



	public Employee(int eid, String ename, int esalary, Address address, Department department) {
		super();
		this.eid = eid;
		this.ename = ename;
		this.esalary = esalary;
		this.address = address;
		this.department = department;
	}


	public Employee() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getEid() {
		return eid;
	}

	public void setEid(int eid) {
		this.eid = eid;
	}

	public String getEname() {
		return ename;
	}

	public void setEname(String ename) {
		this.ename = ename;
	}

	public int getEsalary() {
		return esalary;
	}

	public void setEsalary(int esalary) {
		this.esalary = esalary;
	}


	public Address getAddress() {
		return address;
	}


	public void setAddress(Address address) {
		this.address = address;
	}



	public Department getDepartment() {
		return department;
	}



	public void setDepartment(Department department) {
		this.department = department;
	}

}
