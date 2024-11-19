package com.day1.main;


import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import com.day1.bean.Employee;

public class MyClass {

	public static void main(String[] args) {
		Configuration config = new Configuration();
		config.configure("hibernate.cfg.xml");
		SessionFactory factory = config.buildSessionFactory();
		Session session = factory.openSession();
		
		Transaction tn = session.beginTransaction();
		Employee emp = new Employee();
		emp.setId(100);
		//emp.setName("bbbb");
		//emp.setSalary(60000);
		
		//session.save(emp);
		//session.delete(emp);
		//session.update(emp);
		//session.get(emp.clasa, 100);
		Employee employee = session.get(Employee.class,100);
		System.out.println(employee);
		
		System.out.println("object saved");
	//	System.out.println(Employee.getName());
		
		List<Employee> employees = session.createQuery("from Employee", Employee.class).list();

		System.out.println("All Employees:");
		/*for (Employee employee : employees) {
		    System.out.println("ID: " + employee.getId());
		    System.out.println("name: " + employee.getName());
		    System.out.println("Salary: " + employee.getSalary());
		    System.out.println("---------------------------");
		}*/

		tn.commit();
		
		
		session.close();
		factory.close();
		
	}

}
