package com.ems.util;

import java.sql.Connection;
import java.sql.DriverManager;

public class DBUtil {
	public static Connection getDBCconnection() {
		Connection con = null;
		try {

			// step-1
			Class.forName("org.postgresql.Driver");

			// step-2 --establish connection

			con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres", "postgres", "postgres");

		} catch (Exception e) {
			System.out.println(e);

		}
		return con;
	}

}
