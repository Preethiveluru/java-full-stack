package com.java.day1;


	
class  Vehicle2{
		 Vehicle2() {
			 this(10);
			System.out.println("i have one engine");
		}
		 
		vehicle2(int a){
			System.out.println("i have one engine");
		}
	}

class TwoWheeler extends Vehicle{
		 TwoWheeler() {
			System.out.println("i have two wheels");
		}
	}
	
	public class constructor_execution {

	public static void main(String[] args) {
		
		TwoWheeler two = new TwoWheeler();
		

	}

}
