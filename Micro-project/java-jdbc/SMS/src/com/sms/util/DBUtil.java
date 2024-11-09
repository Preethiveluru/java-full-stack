package com.sms.util;

import java.sql.Connection;
import java.sql.DriverManager;

public class DBUtil {
	public static Connection getDBCconnection() {
		Connection con = null;
		try {
            Class.forName("org.postgresql.Driver");
            con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/student", "postgres", "postgres");

		} catch (Exception e) {
			System.out.println(e);

		}
		return con;
	}

}
