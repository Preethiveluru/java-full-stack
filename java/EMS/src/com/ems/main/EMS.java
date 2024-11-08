package com.ems.main;

import java.util.Scanner;

import com.ems.bean.Employee;
import com.ems.dao.EmployeeDAO;

public class EMS {

	static Scanner sc = new Scanner(System.in);
	static EmployeeDAO dao = new  EmployeeDAO();

	public static int menu() {
		System.out.println("1.insert");
		System.out.println("2.Delete");
		System.out.println("3.Update");
		System.out.println("4.Find");
		System.out.println("5.Find All");
		System.out.println("6.Quit");
		System.out.println("Enter your choice");
		int choice = sc.nextInt();
		return choice;

	}

	public static Employee insertEmployee() {
		System.out.println("enter employee id,name and salary");
		return new Employee(sc.nextInt(),sc.next(),sc.nextInt());

	}

	public static void main(String[] args) {
		String msg="";
		do {
			switch(EMS.menu()) {
			case 1:
				Employee employee = insertEmployee();
				int n=dao.insertEmployee(employee);
				if (n==1)
					System.out.println("record inserted");
				else
					System.out.println("record not  inserted");
				break;
			case 2:
				break;
			case 3:
				break;
			case 4:
				break;
			case 5:
				break;
			case 6:
				System.exit(0);
			}
			System.out.println("do you want to continue[yes/no]");
			msg=sc.next();
		}while(msg.equalsIgnoreCase("yes"));

	}

}
