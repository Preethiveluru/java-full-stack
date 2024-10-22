import {Component} from 'react';
import Employee from "../model/Employee";
import axios from 'axios';
import './emp.css';
class Delete extends Component {
    constructor(props) {
      super(props);
      this.state = {
        Eid: '',
        Ename: '',
        Esalary: '',
        result: '',
        eidError : '',
        esalaryError: '',
        enameError :''
      };
    }
  
    validateEid = (eid) =>{
      let re =/^[0-9]+$/;
      if(eid === ''){
        return " eid is required";
      }
      else if(! re.test(eid)){
        return"invalid id"
  
      }
      else{
        return null
      }
    }
    
   
    
  
    handleResult = () => {
      let error = this.validateEid(this.state.Eid);
      this.setState({eidError : error})
    
  
      if(!error ){
      const { Eid, Ename, Esalary } = this.state;
      /*const result = `Employee Id: ${Eid} \nEmployee Name: ${Ename} \nEmployee Salary: ${Esalary}`;
      this.setState({ result }); */

      let employee =new Employee();
      employee.setId(Eid)
      employee.setName(Ename)
      employee.setSalary(Esalary)

      axios.delete("http://localhost:3004/employees/"+Eid)
        .then(() => {
          document.getElementById("ResultDiv").innerHTML = "<b>Object deleted</b>";
        })
        .catch((error) => {
          console.error("There was an error saving the employee!", error);
        });
    
      }
    }
  
    changeId =(e) => {
      this.setState({Eid:e.target.value})
      let error = this.validateEid(this.state.Eid);
      this.setState({eidError : error})
    }
  
  render() {
      return (
        <div class="container">
          <form onSubmit={(e) => { e.preventDefault(); this.handleResult(); }}>
            <br></br>
            <h1 class="heading">Employee Management System</h1>
            <label>Eid :</label>
            <input type='text' name='Eid' value={this.state.Eid} onChange={this.changeId}></input><br></br>
            <font color="red" ><b>{this.state.eidError}</b></font>
            <br></br>
            
            <br></br>
            <button type="submit">Delete</button>
          </form>
          <div>
            <br></br>
           {/* <pre>{this.state.result}</pre>*/}
          </div>
          <div id='ResultDiv'>

          </div>
        </div>
      );
    }
  }
  
  export default Delete;