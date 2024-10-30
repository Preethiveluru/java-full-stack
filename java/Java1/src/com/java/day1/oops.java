package com.java.day1;

//encapsulation and java bean

class Mobile{
	private
	String brandname;
	private
	int price;
	public String getBrandname() {
		return brandname;
	}
	public void setBrandname(String brandname) {
		this.brandname = brandname;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	
	
	Mobile (String brandname,int price){
		this.brandname=brandname;
		this.price=price;
	}
	void display() {
		System.out.println("brand name : "+brandname);
		System.out.println("price : "+price);
		
	}
}

public class oops {

	public static void main(String[] args) {
		Mobile samsung = new Mobile("samsung",1000);
		samsung.display();
		samsung.setPrice(15000);
		samsung.display();
        
	}

}
