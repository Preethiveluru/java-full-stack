<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Employee Management System</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
</head>
<body>
    <form action="EmployeeController1" method="post">
        <center><h1>Employee Management System</h1></center>
        
        <center>
            <label>Enter Employee ID:</label>
            <input type="text" name="eid" class="form-control" style="width: 300px;"><br>
        </center>
        
        <center>
            <label>Enter Employee Name:</label>
            <input type="text" name="ename" class="form-control" style="width: 300px;"><br>
        </center>
        
        <center>
            <label>Enter Employee Salary:</label>
            <input type="text" name="esalary" class="form-control" style="width: 300px;"><br>
        </center>

        <center>
            <input type="submit" value="Insert" name="aa" class="btn btn-primary">
            <input type="submit" value="Update" name="aa" class="btn btn-success">
            <input type="submit" value="Delete" name="aa" class="btn btn-danger">
            <input type="submit" value="Find" name="aa" class="btn btn-info">
            <input type="submit" value="FindAll" name="aa" class="btn btn-warning">
        </center>
    </form>
</body>
</html>
