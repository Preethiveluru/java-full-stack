
import { Component } from 'react';
//import Employee from "../model/Employee";  
import axios from 'axios';
import './emp.css';

class DeleteBySalary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empId: '',    
      empName: '',  
      empSalary: '',
      result: '',
      empIdError: '', 
    };
  }

  
  validateEmpSalary = (empSalary) => {
    let re = /^[0-9]+$/;
    if (empSalary === "") {
      return "Employee Salary is required";
    } else if (!re.test(empSalary)) {
      return "Invalid Employee Salary";
    } else {
      return null;
    }
  };

  
  handleDelete = () => {
    let error = this.validateEmpSalary(this.state.empSalary);
    this.setState({ empSalaryError: error });

    if (!error) {
      const { empSalary } = this.state;

      
      axios.delete(`http://localhost:1212/delete-employee-salary/${empSalary}`)
        .then(() => {
          document.getElementById("ResultDiv").innerHTML = "<b>Employee deleted successfully</b>";
        })
        .catch((error) => {
          console.error("There was an error deleting the employee!", error);
          document.getElementById("ResultDiv").innerHTML = "<b>Error deleting employee!</b>";
        });
    }
  };

  changeEmpSalary=(e) => {
    this.setState({empSalary:e.target.value})
    let error2 = this.validateEmpSalary(this.state.empSalary);
    this.setState({empSalaryError : error2})
  }


  render() {
    return (
      <div className="container">
        <form onSubmit={(e) => { e.preventDefault(); this.handleDelete(); }}>
          <br />
          <h1 className="heading">Employee Management System</h1>

          <label>Employee salary:</label>
          <input
            type="text"
            name="empSalary"
            value={this.state.empSalary}
            onChange={this.changeEmpSalary}
          />
          <br />
          <font color="red"><b>{this.state.empSalaryError}</b></font>
          <br />
          <button type="submit">Delete</button>
        </form>

        <div>
          <br />
        </div>

        <div id="ResultDiv"></div>
      </div>
    );
  }
}

export default DeleteBySalary;
