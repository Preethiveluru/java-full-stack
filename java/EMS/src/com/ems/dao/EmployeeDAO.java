package com.ems.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;

import com.ems.bean.Employee;
import com.ems.util.DBUtil;

public class EmployeeDAO {
	public int insertEmployee(Employee employee) {
		
		int n =0 ;
		try {
		Connection con = DBUtil.getDBCconnection();
		String sql="insert into employee values(?,?,?)";
		PreparedStatement ps=  con.prepareStatement(sql);
		ps.setInt(1, employee.getEid());
		ps.setString(2, employee.getEname());
		ps.setInt(3, employee.getEsalary());
		
		ps.executeUpdate();
		
		}catch (Exception e) {
		
		}
		return n;
		
	}

}
