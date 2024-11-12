<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Student Management System</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
</head>
<body style= "background-color:pink">
    <div class="container">
        <div class="form-container">
            <h2 class="text-center">Student Management System</h2>
            <form action="StudentController" method="post">
                <!-- Student ID -->
                <div class="form-group">
                    <label for="id">Enter Student ID:</label>
                    <input type="number" class="form-control" id="id" name="id" >
                </div>
                
                <div class="form-group">
                    <label for="name">Enter Student Name:</label>
                    <input type="text" class="form-control" id="name" name="name" >
                </div>
                
                <div class="form-group">
                    <label for="gender">Gender:</label>
                    <select class="form-control" id="gender" name="gender">
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                
                <!-- Contact Number -->
                <div class="form-group">
                    <label for="contactNo">Contact Number:</label>
                    <input type="text" class="form-control" id="contactNo" name="contactNo">
                </div>
                
                <!-- Date of Birth -->
                <div class="form-group">
                    <label for="dob">Date of Birth:</label>
                    <input type="date" class="form-control" id="dob" name="dob">
                </div>
                
                <div class="form-group">
                    <label for="fatherName">Father's Name:</label>
                    <input type="text" class="form-control" id="fatherName" name="fatherName">
                </div>
                
                <div class="form-group text-center">
                    <div class="btn-group" role="group" aria-label="Operation Buttons">
                        <input type="submit" value="Insert" name="operation" class="btn btn-primary">
                        <input type="submit" value="Update" name="operation" class="btn btn-success">
                        <input type="submit" value="Delete" name="operation" class="btn btn-danger">
                        <input type="submit" value="Find" name="operation" class="btn btn-info">
                        <input type="submit" value="FindAll" name="operation" class="btn btn-warning">
                    </div>
                </div>
            </form>
            
        </div>
    </div>

</body>
</html>
