package com.spring;

public class Author {
	private String Authorname;
	private String Location;
	public Author() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Author(String authorname, String location) {
		super();
		Authorname = authorname;
		Location = location;
	}
	public String getAuthorname() {
		return Authorname;
	}
	public void setAuthorname(String authorname) {
		Authorname = authorname;
	}
	public String getLocation() {
		return Location;
	}
	public void setLocation(String location) {
		Location = location;
	}
	@Override
	public String toString() {
		return "Author [Authorname=" + Authorname + ", Location=" + Location + "]";
	}
	

}
