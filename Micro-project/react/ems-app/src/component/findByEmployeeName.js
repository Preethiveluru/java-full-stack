import { Component } from 'react';
import axios from 'axios';
import './emp.css';

class FindByName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empId: '',      
      empName: '',     
      empSalary: '',   
      result: '',   
      employeeList: [],      
      empNameError: ''   
    };
  }

  validateEmpName = (empName) => {
    let re = /^[a-z]+$/;
    if (empName === '') {
      return "Employee Name is required";
    } else if (!re.test(empName)) {
      return "Invalid Employee Name";
    } else {
      return null;
    }
  }

  
  handleResult = (e) => {
    e.preventDefault();
    let error = this.validateEmpName(this.state.empName);
    this.setState({ empNameError: error });

    if (!error) {
      const { empName } = this.state;

      
      axios.get(`http://localhost:1212/read-employee-name/${empName}`)
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
    changeName=(e)=>{
 
        this.setState({empName:e.target.value})
        let error=this.validateEmpName(this.state.empName)
        this.setState({empNameError:error})
     
     }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleResult}>
          <h1 className="heading">Employee Management System</h1>
          <label>Employee Name :</label>
          <input type="text" name="empName" value={this.state.empName} onChange={this.changeName} /><br />
          <span style={{ color: "red" }}><b>{this.state.empNameError}</b></span><br />
          <button type="submit">FindByName</button>
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

export default FindByName;
