package com.java.day4;



class TwoTable extends Thread{
	@Override
	public void run() {
		for (int i=1;i<=10;i++) {
			System.out.println(i + " *  2 = "+(i*2));
			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
	
}

class FiveTable implements Runnable{
	@Override
	public void run() {
		for (int i=1;i<=10;i++) {
			System.err.println(i + " *  5 = "+(i*5));
			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
	
}

public class m5 {

	public static void main(String[] args) {
		TwoTable two = new TwoTable();
		two.start();
		
		Thread five = new Thread (new FiveTable());
		five.start();
		
		

	}

}
