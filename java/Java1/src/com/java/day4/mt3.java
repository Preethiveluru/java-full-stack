package com.java.day4;

public class mt3 extends Thread {
	
	@Override
	public void run() {
		
		for(int i=0;i<=5;i++) {
			System.out.println(Thread.currentThread().getName()+" is running");
			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}

	public static void main(String[] args) {
		
		mt3 t1 = new mt3();
		mt3 t2 = new mt3();
		
		t1.setName("T1");
		t2.setName("T2");
		
		t1.start();
		t2.start();
		
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println("MAIN END");
		

	}

}
