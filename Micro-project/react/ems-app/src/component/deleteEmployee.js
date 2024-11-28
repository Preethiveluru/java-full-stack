
import { Component } from 'react';
//import Employee from "../model/Employee";  
import axios from 'axios';
import './emp.css';

class Delete extends Component {
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

  
  validateEmpId = (empId) => {
    let re = /^[0-9]+$/;
    if (empId === '') {
      return "Employee ID is required";
    } else if (!re.test(empId)) {
      return "Invalid Employee ID";
    } else {
      return null;
    }
  };

  
  handleDelete = () => {
    let error = this.validateEmpId(this.state.empId);
    this.setState({ empIdError: error });

    if (!error) {
      const { empId } = this.state;

      
      axios.delete(`http://localhost:1212/delete-employee/${empId}`)
        .then(() => {
          document.getElementById("ResultDiv").innerHTML = "<b>Employee deleted successfully</b>";
        })
        .catch((error) => {
          console.error("There was an error deleting the employee!", error);
          document.getElementById("ResultDiv").innerHTML = "<b>Error deleting employee!</b>";
        });
    }
  };

  changeEmpId = (e) => {
    this.setState({ empId: e.target.value });
    let error = this.validateEmpId(e.target.value);
    this.setState({ empIdError: error });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={(e) => { e.preventDefault(); this.handleDelete(); }}>
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
          <font color="red"><b>{this.state.empIdError}</b></font>
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

export default Delete;
