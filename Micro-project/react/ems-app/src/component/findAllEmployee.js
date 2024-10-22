import { Component } from 'react';
import axios from 'axios';
import './emp.css';
class FindAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      error: ''
    };
  }

  handleFindAll = () => {
    axios.get("http://localhost:3004/employees")
      .then((response) => {
        const employees = response.data;
        if (employees.length > 0) {
          this.setState({ employees, error: '' });
        } else {
          this.setState({ error: "No employees found." });
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the employees!", error);
        this.setState({ error: "Error fetching the employees. Please try again." });
      });
  }

  render() {
    return (
      <div class="container">
        <h1 class="heading">Employee Management System</h1>
        <button onClick={this.handleFindAll}>Find All Employees</button>
        <div>
          {this.state.error && (
            <p style={{ color: "red" }}><b>{this.state.error}</b></p>
          )}
          {this.state.employees.length > 0 && (
            <table border="1" style={{ marginTop: "20px", width: "100%" }}>
              <thead>
                <tr>
                  <th>Employee ID</th>
                  <th>Employee Name</th>
                  <th>Employee Salary</th>
                </tr>
              </thead>
              <tbody>
                {this.state.employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.salary}</td>
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

export default FindAll;
