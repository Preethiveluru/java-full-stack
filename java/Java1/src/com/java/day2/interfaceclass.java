package com.java.day2;

interface Vehicleplan {
	void noofengine(); // public and abstract
	void noofwheels();
	void brandname();
}

abstract class vehicle implements Vehicleplan{
	public void noofengine() {
		System.out.println("i have one engine");
	}
}

class bike extends vehicle{
	public void noofwheels() {
		System.out.println("two wheels");
	}
	
	public void brandname() {
		System.out.println("honda");
	}
}
public class interfaceclass {

	public static void main(String[] args) {
		
		//vehicle obj = new Vehicleplan();
		bike b=new bike();
		
		b.brandname();
		b.noofwheels();
		b.noofengine();
		
		
		

	}

}
