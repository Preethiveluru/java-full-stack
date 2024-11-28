import { Component } from 'react';
import axios from 'axios';
import './emp.css';

class Find extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empId: '',      
      empName: '',     
      empSalary: '',   
      result: '',      
      empIdError: ''   
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
  }

  
  handleResult = (e) => {
    e.preventDefault();
    let error = this.validateEmpId(this.state.empId);
    this.setState({ empIdError: error });

    if (!error) {
      const { empId } = this.state;

      
      axios.get(`http://localhost:1212/read-employee/${empId}`)
        .then((response) => {
          const employee = response.data;
          if (employee) {
            const result = `Employee ID: ${employee.empId} \nEmployee Name: ${employee.empName} \nEmployee Salary: ${employee.empSalary}`;
            const formattedResult = result.replace(/\n/g, "<br/>");
            this.setState({
              empName: employee.name,
              empSalary: employee.salary,
              result: formattedResult
            });
          } else {
            this.setState({
              result: "<b>No employee found with the given ID.</b>"
            });
          }
        })
        .catch((error) => {
          console.error("There was an error fetching the employee!", error);
          this.setState({
            result: "<b>Error fetching the employee data. Please try again.</b>"
          });
        });
    }
  }

  changeEmpId = (e) => {
    const empId = e.target.value;
    this.setState({ empId }, () => {
      const error = this.validateEmpId(empId);
      this.setState({ empIdError: error });
    });
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleResult}>
          <h1 className="heading">Employee Management System</h1>
          <label>Employee ID :</label>
          <input type="text" name="empId" value={this.state.empId} onChange={this.changeEmpId} /><br />
          <span style={{ color: "red" }}><b>{this.state.empIdError}</b></span><br />
          <button type="submit">Find</button>
        </form>
        <div>
          <br />
          <div id="ResultDiv" dangerouslySetInnerHTML={{ __html: this.state.result }}></div>
        </div>
      </div>
    );
  }
}

export default Find;
