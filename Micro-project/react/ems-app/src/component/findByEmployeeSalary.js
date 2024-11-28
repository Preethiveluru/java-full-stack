import { Component } from 'react';
import axios from 'axios';
import './emp.css';

class FindBySalary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empId: '',      
      empName: '',     
      empSalary: '',   
      result: '',   
      employeeList: [],      
      empSalaryError: ''   
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

  
  handleResult = (e) => {
    e.preventDefault();
    let error = this.validateEmpSalary(this.state.empSalary);
    this.setState({ empSalaryError: error });

    if (!error) {
      const { empSalary } = this.state;

      
      axios.get(`http://localhost:1212/read-employee-salary/${empSalary}`)
        .then((response) => {
          const employee = response.data;
          console.log(response.data)
          if (employee) {
            //const result = `Employee ID: ${employee.empId} \nEmployee Name: ${employee.empName} \nEmployee Salary: ${employee.empSalary}`;
            //const formattedResult = result.replace(/\n/g, "<br/>");
            this.setState({
                employeeList: response.data
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

  /*changeEmpName = (e) => {
    const empId = e.target.value;
    this.setState({ empName }, () => {
      const error = this.validateEmpName(empName);
      this.setState({ empNameError: error });
    });
  }*/
    changeEmpSalary=(e) => {
        this.setState({empSalary:e.target.value})
        let error2 = this.validateEmpSalary(this.state.empSalary);
        this.setState({empSalaryError : error2})
      }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleResult}>
          <h1 className="heading">Employee Management System</h1>
          <label>Employee salary :</label>
          <input type="text" name="empSalary" value={this.state.empSalary} onChange={this.changeEmpSalary} /><br />
          <span style={{ color: "red" }}><b>{this.state.empSalaryError}</b></span><br />
          <button type="submit">FindBySalary</button>
        </form>
        <div>
          <br />
          <div id="ResultDiv" dangerouslySetInnerHTML={{ __html: this.state.result }}></div>
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
        </div>
      
    );
  }
}

export default FindBySalary;
