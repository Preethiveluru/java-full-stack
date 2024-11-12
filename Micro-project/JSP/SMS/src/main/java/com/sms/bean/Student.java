package com.sms.bean;

import java.util.Date;

public class Student {

    public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getContactNo() {
		return contactNo;
	}

	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public String getFatherName() {
		return fatherName;
	}

	public void setFatherName(String fatherName) {
		this.fatherName = fatherName;
	}

	private int id;
    private String name;
    private String gender;
    private String contactNo;
    private Date dob;
    private String fatherName;

    public Student() {}

    public Student(int id, String name, String gender, String contactNo, Date dob, String fatherName) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.contactNo = contactNo;
        this.dob = dob;
        this.fatherName = fatherName;
    }

    
}
