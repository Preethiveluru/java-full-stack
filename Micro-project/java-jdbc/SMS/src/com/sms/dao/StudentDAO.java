package com.sms.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.LinkedList;
import java.util.List;
import com.sms.bean.Student;
import com.sms.util.DBUtil;

public class StudentDAO {

    public int insertStudent(Student student) {
        int n = 0;
        try {
            Connection con = DBUtil.getDBCconnection();
            String sql = "INSERT INTO student2 (id, name, gender, contact_no, dob,father_name) VALUES (?, ?, ?, ?, ?,?)";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setInt(1, student.getId());
            ps.setString(2, student.getName());
            ps.setString(3, student.getGender());
            ps.setString(4, student.getContactNo());
           ps.setDate(5, new java.sql.Date(student.getDob().getTime()));  
            ps.setString(6, student.getFatherName());

            n = ps.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return n;
    }

    public int deleteStudent(int id) {
        int n = 0;
        try {
            Connection con = DBUtil.getDBCconnection();
            String sql = "DELETE FROM student2 WHERE id = ?";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setInt(1, id);

            n = ps.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return n;
    }

    public int updateStudent(Student student) {
        int n = 0;
        try {
            Connection con = DBUtil.getDBCconnection();
            String sql = "UPDATE student2 SET name = ?, gender = ?, contact_no = ?,dob=?, father_name = ? WHERE id = ?";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setString(1, student.getName());
            ps.setString(2, student.getGender());
            ps.setString(3, student.getContactNo());
            ps.setDate(4, new java.sql.Date(student.getDob().getTime()));
            ps.setString(5, student.getFatherName());
            ps.setInt(6, student.getId());

            n = ps.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return n;
    }

    public Student findStudent(int id) {
        Student student = null;
        try {
            Connection con = DBUtil.getDBCconnection();
            String sql = "SELECT * FROM student2 WHERE id = ?";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setInt(1, id);
            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                student = new Student();
                student.setId(rs.getInt("id"));
                student.setName(rs.getString("name"));
                student.setGender(rs.getString("gender"));
                student.setContactNo(rs.getString("contact_no"));
                student.setDob(rs.getDate("dob"));
                student.setFatherName(rs.getString("father_name"));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return student;
    }

    public List<Student> findAllStudents() {
        List<Student> list = new LinkedList<>();
        try {
            Connection con = DBUtil.getDBCconnection();
            String sql = "SELECT * FROM student2";
            PreparedStatement ps = con.prepareStatement(sql);
            ResultSet rs = ps.executeQuery();

            while (rs.next()) {
                Student student = new Student();
                student.setId(rs.getInt("id"));
                student.setName(rs.getString("name"));
                student.setGender(rs.getString("gender"));
                student.setContactNo(rs.getString("contact_no"));
               student.setDob(rs.getDate("dob"));
                student.setFatherName(rs.getString("father_name"));
                list.add(student);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }
}
