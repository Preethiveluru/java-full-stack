package com.java.day1;

//Dynamic method dispatch



class TwoWheler{
	void noOfWheels() {
		System.out.println("i have one");
	}
	
	void brandname() {
		System.out.println("1");
	}
}


class Bike1 extends TwoWheler{
	void brandname() {
		System.out.println("honda");
	}
}
public class DMD {

	public static void main(String[] args) {
		TwoWheler two = new Bike1();//DMD
		two.noOfWheels();
		two.brandname();
		

	}

}
