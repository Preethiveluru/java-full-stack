package com.java.day2;

interface one{
	int a=10;
}
interface two{
	int a=20;
}
interface three extends one,two{
	void sum();
}

class normalclass implements three{
	public void sum() {
		System.out.println(one.a+two.a);
	}
}


public class MII {
	
	public static void main(String[] args) {
		normalclass nc= new normalclass();
		nc.sum();
	}

}
