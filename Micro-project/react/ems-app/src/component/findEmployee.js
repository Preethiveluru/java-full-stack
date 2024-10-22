import { Component } from 'react';
import axios from 'axios';
import './emp.css';


class Find extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Eid: '',
      Ename: '',
      Esalary: '',
      result: '',
      eidError: ''
    };
  }

  validateEid = (eid) => {
    let re = /^[0-9]+$/;
    if (eid === '') {
      return "Eid is required";
    } else if (!re.test(eid)) {
      return "Invalid ID";
    } else {
      return null;
    }
  }

  handleResult = (e) => {
    e.preventDefault();
    let error = this.validateEid(this.state.Eid);
    this.setState({ eidError: error });

    if (!error) {
      const { Eid } = this.state;

      axios.get(`http://localhost:3004/employees/${Eid}`)
        .then((response) => {
          const employee = response.data;
          if (employee) {
            const result = `Employee Id: ${employee.id} \nEmployee Name: ${employee.name} \nEmployee Salary: ${employee.salary}`;
            const formattedResult = result.replace(/\n/g, "<br/>");
            this.setState({
              Ename: employee.name,
              Esalary: employee.salary,
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

  changeId = (e) => {
    const Eid = e.target.value;
    this.setState({ Eid }, () => {
      const error = this.validateEid(Eid);
      this.setState({ eidError: error });
    });
  }

  render() {
    return (
      <div class="container"> 
        <form onSubmit={this.handleResult}>
          <h1 class="heading">Employee Management System</h1>
          <label>Eid :</label>
          <input type='text' name='Eid' value={this.state.Eid} onChange={this.changeId} /><br />
          <span style={{ color: "red" }}><b>{this.state.eidError}</b></span><br />
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
