package com.java.day5;

import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Connection;

public class jdbc {

	public static void main(String[] args) throws ClassNotFoundException, SQLException {
		//step-1---loading driver into jvm
		
		//Class.forName("org.postgresql.Driver");
		
		//step-2 --establish connection
		
		Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres","postgres", "postgres");
		
		//step-3 execute the query
		
		String sql = "delete from employee where eid = ?";
		PreparedStatement ps = con.prepareStatement(sql);
		
		//step-4 execute query
		
		ps.setInt(1, 101);
		
        
        int n = ps.executeUpdate();
        if(n==1)
        	System.out.println("record inserted");
        else
        	System.out.println("record not inserted");

        
        
	}

}
