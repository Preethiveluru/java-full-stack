import React, { Component } from "react";
import axios from "axios";
import "./emp.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empId: "",
      empName: "",
      empSalary: "",
      result: "",
      empIdError: "",
      empSalaryError: "",
      empNameError: "",
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
    let error = this.validateEmpId(this.state.empId);
    let error1 = this.validateEmpName(this.state.empName);
    let error2 = this.validateEmpSalary(this.state.empSalary);

    this.setState({
      empIdError: error,
      empNameError: error1,
      empSalaryError: error2,
    });

    if (!error && !error1 && !error2) {
      const { empId, empName, empSalary } = this.state;
      let employee = {
        empId: empId,
        empName: empName,
        empSalary: empSalary,
      };

      axios
        .post("http://localhost:1212/create-employee", employee)
        .then(() => {
          this.setState({ message: "Employee saved successfully!" });
        })
        .catch((error) => {
          this.setState({ message: "Error saving employee: " + error.message });
        });
    }
  };

  changeEmpId = (e) => {
    const value = e.target.value;
    this.setState({ empId: value, empIdError: this.validateEmpId(value) });
  };

  changeEmpName = (e) => {
    const value = e.target.value;
    this.setState({ empName: value, empNameError: this.validateEmpName(value) });
  };

  changeEmpSalary = (e) => {
    const value = e.target.value;
    this.setState({
      empSalary: value,
      empSalaryError: this.validateEmpSalary(value),
    });
  };

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
          <button type="submit">Insert</button>
        </form>
        <div id="ResultDiv">
          <b>{this.state.message}</b>
        </div>
      </div>
    );
  }
}

export default App;
