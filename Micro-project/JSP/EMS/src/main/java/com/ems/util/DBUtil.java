package com.ems.util;



import java.sql.Connection;
import java.sql.DriverManager;
 
public class DBUtil {
 
	public static Connection getDBConnection() {
		Connection con = null;
		try {
			// Step-1 : Loading the driver into JVM
			Class.forName("org.postgresql.Driver");
 
			// Step-2 : Create Connection with db
			con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres", "postgres", "postgres");
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return con;
 
	}
 
}
 