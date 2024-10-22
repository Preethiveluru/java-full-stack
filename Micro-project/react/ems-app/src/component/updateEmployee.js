import {Component} from 'react';
import Employee from "../model/Employee";
import axios from 'axios';
import './emp.css';
class Update extends Component {
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
    validateEname = (ename) =>{
      let re =/^[a-zA-Z]+$/;
      if(ename === ''){
        return " ename is required";
      }
      else if(! re.test(ename)){
        return"invalid id"
  
      }
      else{
        return null
      }
    }
    validateEsalary = (esalary) =>{
      let re =/^[0-9]+$/;
      if(esalary === ''){
        return " esalary is required";
      }
      else if(! re.test(esalary)){
        return"invalid id"
  
      }
      else{
        return null
      }
    }
    
  
    handleResult = () => {
      let error = this.validateEid(this.state.Eid);
      this.setState({eidError : error})
      let error1 = this.validateEname(this.state.Ename);
      this.setState({enameError : error1})
      let error2 = this.validateEsalary(this.state.Esalary);
      this.setState({esalaryError : error2})
  
      if(!error && !error1 && !error2){
      const { Eid, Ename, Esalary } = this.state;
      /*const result = `Employee Id: ${Eid} \nEmployee Name: ${Ename} \nEmployee Salary: ${Esalary}`;
      this.setState({ result });*/

      let employee =new Employee();
      employee.setId(Eid)
      employee.setName(Ename)
      employee.setSalary(Esalary)

      axios.put("http://localhost:3004/employees/"+Eid, employee)
        .then(() => {
          document.getElementById("ResultDiv").innerHTML = "<b>Object saved</b>";
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
    changeName =(e) => {
      this.setState({Ename:e.target.value})
      let error1 = this.validateEname(this.state.Ename);
      this.setState({enameError : error1})
    }
    changeSalary=(e) => {
      this.setState({Esalary:e.target.value})
      let error2 = this.validateEsalary(this.state.Esalary);
      this.setState({esalaryError : error2})
    }
    
  render() {
      return (
        <div class="container">
          <form onSubmit={(e) => { e.preventDefault(); this.handleResult(); }}>
            <br></br>
            <h1 class="heading">Employee Management System</h1>
            <label>Eid :</label>
            <input type='text'  name="Eid"value={this.state.Eid} onChange={this.changeId}></input><br></br>
            <font color="red" ><b>{this.state.eidError}</b></font>
            <br></br>
            <label>Ename:</label>
            <input type='text' name='Ename' value={this.state.Ename} onChange={this.changeName}></input><br></br>
            <font color="red" ><b>{this.state.enameError}</b></font>
            <br></br>
            <label>Esalary:</label>
            <input type='text' name='Esalary' value={this.state.Esalary} onChange={this.changeSalary}></input><br></br>
            <font color="red" ><b>{this.state.esalaryError}</b></font>
            <br></br>
            <button type="submit">Update</button>
          </form>
          <div>
            <br></br>
            
          </div>
        </div>
      );
    }
  }
  
  export default Update;