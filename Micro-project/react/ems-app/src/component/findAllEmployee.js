import { Component } from 'react';
import axios from 'axios';
import './emp.css';

class GetAllEmployees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeList: [],   
      fetchError: ''      
    };
  }

  handleFindAllEmployees = () => {  
    axios.get("http://localhost:1212/readAll-employee")
      .then((response) => {
        const employeeList = response.data; 
        if (employeeList.length > 0) {
          this.setState({ employeeList, fetchError: '' });
        } else {
          this.setState({ fetchError: "No employees found." });
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the employees!", error);
        this.setState({ fetchError: "Error fetching the employees. Please try again." });  
      });
  }

  render() {
    return (
      <div className="container">
        <h1 className="heading">Employee Management System</h1>
        <button onClick={this.handleFindAllEmployees}>Find All Employees</button>
        <div>
          {this.state.fetchError && (  
            <p style={{ color: "red" }}><b>{this.state.fetchError}</b></p>
          )}
          {this.state.employeeList.length > 0 && ( 
            <table border="1" style={{ marginTop: "20px", width: "100%" }}>
              <thead>
                <tr>
                  <th>Employee ID</th>
                  <th>Employee Name</th>
                  <th>Employee Salary</th>
                </tr>
              </thead>
              <tbody>
                {this.state.employeeList.map((employee) => ( 
                  <tr key={employee.empId}>
                    <td>{employee.empId}</td>
                    <td>{employee.empName}</td>
                    <td>{employee.empSalary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    );
  }
}

export default GetAllEmployees;
