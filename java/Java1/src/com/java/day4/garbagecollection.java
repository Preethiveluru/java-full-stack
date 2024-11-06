package com.java.day4;

public class garbagecollection {
	
	static int count =0;
	 garbagecollection() {
          count++;
          System.out.println(count);
         }
	 
	 @Override
	protected void finalize() throws Throwable {
		count --;
		System.out.println(count);
	}

	public static void main(String[] args) {
		garbagecollection obj1 = new garbagecollection();
		garbagecollection obj2 = new garbagecollection();
		
		obj1 =null;
		System.gc();
		
		obj2 = null;
		Runtime.getRuntime().gc();
		
     

	}

}
