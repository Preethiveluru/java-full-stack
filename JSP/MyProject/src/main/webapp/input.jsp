<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
    <title>Factorial Table Input</title>
</head>
<body>
    <h2>Enter a Number to Get Its Factorial Table</h2>
    <form action="output.jsp" method="get">
        <label for="number">Number:</label>
        <input type="number" id="number" name="number" required>
        <button type="submit">Submit</button>
    </form>
</body>
</html>
