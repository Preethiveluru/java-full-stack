package com.sms.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import com.sms.bean.Student;
import com.sms.util.DBUtil;
import java.text.SimpleDateFormat;

public class StudentDAO {

    private static final SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

    public int insertStudent(Student student) {
        int rowsInserted = 0;
        try (Connection con = DBUtil.getDBCconnection()) {
            String sql = "INSERT INTO student (id, name, gender, contactno, dob, fathername) VALUES (?, ?, ?, ?, ?, ?)";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setInt(1, student.getId());
            ps.setString(2, student.getName());
            ps.setString(3, student.getGender());
            ps.setString(4, student.getContactNo());
            ps.setDate(5, new java.sql.Date(student.getDob().getTime()));  // Converting to SQL date format
            ps.setString(6, student.getFatherName());

            rowsInserted = ps.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return rowsInserted;
    }
    public int deleteStudent(int id) {
        int rowsDeleted = 0;
        try (Connection con = DBUtil.getDBCconnection()) {
            String sql = "DELETE FROM student WHERE id = ?";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setInt(1, id);

            rowsDeleted = ps.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return rowsDeleted;
    }

    public int updateStudent(Student student) {
        int rowsUpdated = 0;
        try (Connection con = DBUtil.getDBCconnection()) {
            String sql = "UPDATE student SET name = ?, gender = ?, contactno = ?, dob = ?, fathername = ? WHERE id = ?";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setString(1, student.getName());
            ps.setString(2, student.getGender());
            ps.setString(3, student.getContactNo());
            ps.setDate(4, new java.sql.Date(student.getDob().getTime()));  // SQL Date format
            ps.setString(5, student.getFatherName());
            ps.setInt(6, student.getId());

            rowsUpdated = ps.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return rowsUpdated;
    }
    public Student findStudent(int id) {
        Student student = null;
        try (Connection con = DBUtil.getDBCconnection()) {
            String sql = "SELECT * FROM student WHERE id = ?";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setInt(1, id);

            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                student = new Student();
                student.setId(rs.getInt("id"));
                student.setName(rs.getString("name"));
                student.setGender(rs.getString("gender"));
                student.setContactNo(rs.getString("contactno"));
                student.setDob(rs.getDate("dob"));  // Retrieve date in SQL format
                student.setFatherName(rs.getString("fathername"));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return student;
    }
    public List<Student> findAllStudents() {
        List<Student> students = new ArrayList<>();
        try (Connection con = DBUtil.getDBCconnection()) {
            String sql = "SELECT * FROM student";
            PreparedStatement ps = con.prepareStatement(sql);

            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                Student student = new Student();
                student.setId(rs.getInt("id"));
                student.setName(rs.getString("name"));
                student.setGender(rs.getString("gender"));
                student.setContactNo(rs.getString("contactno"));
                student.setDob(rs.getDate("dob")); 
                student.setFatherName(rs.getString("fathername"));
                students.add(student);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return students;
    }
}
