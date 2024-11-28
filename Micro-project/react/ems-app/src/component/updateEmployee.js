

import React, { Component } from "react";
import axios from "axios";
import "./emp.css";

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empId: "",
      empName: "",
      empSalary: "",
      empIdError: "",
      empNameError: "",
      empSalaryError: "",
      message: "",
    };
  }

  validateEmpId = (empId) => {
    let re = /^[0-9]+$/;
    if (empId === "") {
      return "Employee ID is required";
    } else if (!re.test(empId)) {
      return "Invalid Employee ID";
    } else {
      return null;
    }
  };

  validateEmpName = (empName) => {
    let re = /^[a-zA-Z]+$/;
    if (empName === "") {
      return "Employee Name is required";
    } else if (!re.test(empName)) {
      return "Invalid Employee Name";
    } else {
      return null;
    }
  };

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

  handleResult = () => {
    let empIdError = this.validateEmpId(this.state.empId);
    let empNameError = this.validateEmpName(this.state.empName);
    let empSalaryError = this.validateEmpSalary(this.state.empSalary);

    this.setState({ empIdError, empNameError, empSalaryError });

    if (!empIdError && !empNameError && !empSalaryError) {
      const { empId, empName, empSalary } = this.state;

      let employee = {
        empId,
        empName,
        empSalary,
      };

      axios.put(`http://localhost:1212/update-employee`, employee)
        .then(() => {
          this.setState({ message: "Employee updated successfully!" });
        })
        .catch((error) => {
          this.setState({
            message: "Error updating employee: " + error.message,
          });
        });
    }
  };

 

 
  changeEmpId =(e) => {
    this.setState({empId:e.target.value})
    let error = this.validateEmpId(this.state.empId);
    this.setState({empIdError : error})
  }
  changeEmpName =(e) => {
    this.setState({empName:e.target.value})
    let error1 = this.validateEmpName(this.state.empName);
    this.setState({empNameError: error1})
  }
  changeEmpSalary=(e) => {
    this.setState({empSalary:e.target.value})
    let error2 = this.validateEmpSalary(this.state.empSalary);
    this.setState({empSalaryError : error2})
  }

  render() {
    return (
      <div className="container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.handleResult();
          }}
        >
          <br />
          <h1 className="heading">Employee Management System</h1>
          <label>Employee ID:</label>
          <input
            type="text"
            name="empId"
            value={this.state.empId}
            onChange={this.changeEmpId}
          />
          <br />
          <font color="red">
            <b>{this.state.empIdError}</b>
          </font>
          <br />
          <label>Employee Name:</label>
          <input
            type="text"
            name="empName"
            value={this.state.empName}
            onChange={this.changeEmpName}
          />
          <br />
          <font color="red">
            <b>{this.state.empNameError}</b>
          </font>
          <br />
          <label>Employee Salary:</label>
          <input
            type="text"
            name="empSalary"
            value={this.state.empSalary}
            onChange={this.changeEmpSalary}
          />
          <br />
          <font color="red">
            <b>{this.state.empSalaryError}</b>
          </font>
          <br />
          <button type="submit">Update</button>
        </form>
        <div id="ResultDiv">
          <b>{this.state.message}</b>
        </div>
      </div>
    );
  }
}

export default Update;
