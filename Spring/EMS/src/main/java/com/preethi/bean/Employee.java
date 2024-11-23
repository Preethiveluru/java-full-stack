package com.preethi.bean;

public class Employee {

	@Override
	public String toString() {
		return "Employee [eid=" + eid + ", ename=" + ename + ", salary=" + esalary + "]";
	}
	private int eid;
	private String ename;
	private int esalary;
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
	public int getESalary() {
		return esalary;
	}
	public void setESalary(int salary) {
		this.esalary = salary;
	}
	public Employee(int eid, String ename, int salary) {
		super();
		this.eid = eid;
		this.ename = ename;
		this.esalary = salary;
	}
	public Employee() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
