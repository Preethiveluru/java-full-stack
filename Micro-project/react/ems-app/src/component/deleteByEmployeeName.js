
import { Component } from 'react';
//import Employee from "../model/Employee";  
import axios from 'axios';
import './emp.css';

class DeleteByName extends Component {
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

  
  handleDelete = () => {
    let error = this.validateEmpName(this.state.empName);
    this.setState({ empNameError: error });

    if (!error) {
      const { empName } = this.state;

      
      axios.delete(`http://localhost:1212/delete-employee-name/${empName}`)
        .then(() => {
          document.getElementById("ResultDiv").innerHTML = "<b>Employee deleted successfully</b>";
        })
        .catch((error) => {
          console.error("There was an error deleting the employee!", error);
          document.getElementById("ResultDiv").innerHTML = "<b>Error deleting employee!</b>";
        });
    }
  };

  changeName=(e)=>{
 
    this.setState({empName:e.target.value})
    let error=this.validateEmpName(this.state.empName)
    this.setState({empNameError:error})
 
 }


  render() {
    return (
      <div className="container">
        <form onSubmit={(e) => { e.preventDefault(); this.handleDelete(); }}>
          <br />
          <h1 className="heading">Employee Management System</h1>

          <label>Employee ID:</label>
          <input
            type="text"
            name="empName"
            value={this.state.empName}
            onChange={this.changeName}
          />
          <br />
          <font color="red"><b>{this.state.empNameError}</b></font>
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

export default DeleteByName;
