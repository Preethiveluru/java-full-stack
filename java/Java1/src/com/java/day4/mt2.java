package com.java.day4;

public class mt2 extends Thread {
	
	@Override
	public void run() {
		
		for(int i=0;i<=5;i++) {
			System.out.println("thread is running");
			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}

	public static void main(String[] args) {
		
		mt2 t1 = new mt2();
		t1.start();
		
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println("MAIN END");
		Thread.currentThread();

	}

}
