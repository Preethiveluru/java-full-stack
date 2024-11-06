package com.java.day4;

public class mt4 implements Runnable {
	
	@Override
	public void run() {
		
		for(int i=0;i<=5;i++) {
			System.out.println(Thread.currentThread().getName()+" is running");
			try {
				if(Thread.currentThread().getName().equals("T1")) {
					Thread.sleep(600);
				}
				if(Thread.currentThread().getName().equals("T2")) {
					Thread.sleep(1000);
				}
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}

	public static void main(String[] args) {
		
		Thread t1 = new Thread(new mt4());
		Thread t2 = new Thread(new mt4());
		
		
		t1.setName("T1");
		t2.setName("T2");
		
		t1.start();
		t2.start();
		
		t2.suspend();
		
		try {
			t1.join();
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		t2.resume();
		System.out.println("MAIN END");
		

	}

}
