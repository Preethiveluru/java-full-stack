package com.java.day5;

import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Connection;

public class jdbc2 {

	public static void main(String[] args) throws ClassNotFoundException, SQLException {
		//step-1---loading driver into jvm
		
		//Class.forName("org.postgresql.Driver");
		
		//step-2 --establish connection
		
		Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres","postgres", "postgres");
		
		//step-3 execute the query
		
		String sql = "select * from employee";
		PreparedStatement ps = con.prepareStatement(sql);
		
		//step-4 execute query
		
        
        ResultSet rs = ps.executeQuery();
        
        while(rs.next())
        	System.out.println(rs.getInt("eid")+"  "+rs.getString("ename")+"  "+rs.getInt("esalary"));
        
        
	}

}
