package com.day1.main;


import java.util.Iterator;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.criterion.Restrictions;
import org.hibernate.query.Query;

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
		//Employee employee = session.get(Employee.class,100);
		//System.out.println(employee);
		
		System.out.println("object saved");
	//	System.out.println(Employee.getName());
		
		/*List<Employee> employees = session.createQuery("from Employee", Employee.class).list();

		System.out.println("All Employees:");
		for (Employee employee : employees) {
		    System.out.println("ID: " + employee.getId());
		    System.out.println("name: " + employee.getName());
		    System.out.println("Salary: " + employee.getSalary());
		    System.out.println("---------------------------");
		}
       */
		
		
	/*	Query query =session.createQuery("from Employee where id=100");
		List<Employee> list = query.list();
		Iterator<Employee> it = list.iterator();
		while(it.hasNext()) {
			Employee obj =(Employee)it.next();
			 System.out.println("ID: " + obj.getId());
			    System.out.println("name: " + obj.getName());
			    System.out.println("Salary: " + obj.getSalary());
			    System.out.println("---------------------------");
		}
		*/
		/*int id=100;
		Query query =session.createQuery("from Employee where eid=:idno");
		query.setParameter("idno", id);
		List<Employee> list = query.list();
		Iterator<Employee> it = list.iterator();
		while(it.hasNext()) {
			Employee obj =(Employee)it.next();
			 System.out.println("ID: " + obj.getId());
			    System.out.println("name: " + obj.getName());
			    System.out.println("Salary: " + obj.getSalary());
			    System.out.println("---------------------------");
		}
		
		*/
		
		/*int id=100;
		String name = "bbbb";
		int salary=22222;
		
		Query query =session.createQuery("update Employee set name =:name,salary =:salary where id=:idno");
		query.setParameter("idno", id);
		query.setParameter("name", name);
		query.setParameter("salary", salary);
		
		int n =query.executeUpdate();
		*/
		// delete query
		/*
		int id=100;
		Query query =session.createQuery("delete from Employee where id=:idno");
		query.setParameter("idno", id);
		int n =query.executeUpdate();
		*/
		//
		/*int id=101;
		Query query =session.createQuery("select emp.id,emp.name,emp.salary from Employee emp where emp.id=:idno");
		query.setParameter("idno", id);
		*/
 
		/*List list = query.list();
		Iterator it = list.iterator();11
		while(it.hasNext()) {
			Object data[]=(Object[])it.next();
			 System.out.println(data[0]+" "+data[1]+" "+data[2]);
			    
		}*/
		
		/*List<Employee> list = query.list();
		Iterator<Employee> it = list.iterator();
		while(it.hasNext()) {
			Employee obj =(Employee)it.next();
			 System.out.println("ID: " + obj.getId());
			    System.out.println("name: " + obj.getName());
			    System.out.println("Salary: " + obj.getSalary());
			    System.out.println("---------------------------");
		
		*/
		//HCQL
		//method1
		/*Criteria query = session.createCriteria(Employee.class);
		query.add(Restrictions.eq("id",101));
		List<Employee> list = query.list();
		Iterator<Employee> it = list.iterator();
		while(it.hasNext()) {
			Employee obj =(Employee)it.next();
			 System.out.println("ID: " + obj.getId());
			    System.out.println("name: " + obj.getName());
			    System.out.println("Salary: " + obj.getSalary());
			    System.out.println("---------------------------");
		
		}*/
		//m-2 greaterthan
		/*Criteria query = session.createCriteria(Employee.class);
		query.add(Restrictions.gt("id",101));
		List<Employee> list = query.list();
		Iterator<Employee> it = list.iterator();
		while(it.hasNext()) {
			Employee obj =(Employee)it.next();
			 System.out.println("ID: " + obj.getId());
			    System.out.println("name: " + obj.getName());
			    System.out.println("Salary: " + obj.getSalary());
			    System.out.println("---------------------------");
		
		}*/
		
		//m-3 lessthsn
	/*	
		Criteria query = session.createCriteria(Employee.class);
		//query.add(Restrictions.lt("id",101));
		//query.add(Restrictions.le("id",101));
		query.add(Restrictions.ne("id",101));
		query.add(Restrictions.ge("id",101));
		List<Employee> list = query.list();
		Iterator<Employee> it = list.iterator();
		while(it.hasNext()) {
			Employee obj =(Employee)it.next();
			 System.out.println("ID: " + obj.getId());
			    System.out.println("name: " + obj.getName());
			    System.out.println("Salary: " + obj.getSalary());
			    System.out.println("---------------------------");
		
		}
		*/
		SQLQuery query = session.createSQLQuery("select * from employee");
		query.addEntity(Employee.class);
	
		List<Employee> list = query.list();
		Iterator<Employee> it = list.iterator();
		while(it.hasNext()) {
			Employee obj =(Employee)it.next();
			 System.out.println("ID: " + obj.getId());
			    System.out.println("name: " + obj.getName());
			    System.out.println("Salary: " + obj.getSalary());
			    System.out.println("---------------------------");
		
		}
		
	
		
		
		
		
		
		
		tn.commit();
		
		
		session.close();
		factory.close();
		
	}

}
