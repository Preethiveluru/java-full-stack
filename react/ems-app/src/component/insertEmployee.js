import { Component } from 'react';
import axios from "axios";
import "./emp.css"
import Employee from '../model/Employee';
import Department from '../model/Department';
export default class InsertEmployee extends Component {
 
    constructor() {
        super();
        this.state = {
            flag: false,
            empId: "",
            empName: "",
            empSalary: "",
            employee: "",
            eidError: "",
            enameError: "",
            esalaryError: "",
            deptId:"",
            errorDept:"",
            deptName:"",
            dnameError:""
        }
 
    }
 
    validateEid = (empId) => {
        let reg = /^[0-9]+$/
        if (empId === "") {
            return "Employee Id is Required"
        }
        else if (!reg.test(empId)) {
            return "Invalid Employee Id"
        }
        else
            return null
    }
   
    validateEname = (empName) => {
        let reg = /^[a-zA-Z ]+$/
        if (empName === "") {
            return "Employee Name is Required"
        }
        else if (!reg.test(empName)) {
            return "Invalid Employee Name"
        }
        else
            return null
 
    }
    validateEsalary = (empSalary) => {
        let reg = /^[0-9]+$/
        if (empSalary === "") {
            return "Employee Salary is Required"
        }
        else if (!reg.test(empSalary)) {
            return "Invalid Employee Salary"
        }
        else
            return null
 
    }
 
    validateDeptId(deptId)
    {
        let reg=/^[0-9\b]+$/;
       if(deptId===''){
        return "Dept ID is required"
       }
       else if(!reg.test(deptId)){
        return "Dept ID is invalid"
       }
       else{
        return null
       }
    }
   
    validateDeptName = (deptName) => {
        let reg = /^[a-zA-Z ]+$/
        if (deptName === "") {
            return "Department Name is Required"
        }
        else if (!reg.test(deptName)) {
            return "Invalid Department Name"
        }
        else
            return null
 
    }
 
    changeId = (e) => {
        const value = e.target.value;
        this.setState({ empId: value });
        const error = this.validateEid(value);
        this.setState({ eidError: error });
    };
    
    changeName = (e) => {
        this.setState({ empName: e.target.value });
        let error = this.validateEname(this.state.empName);
        this.setState({ enameError: error })
    }
    changeSalary = (e) => {
        this.setState({ empSalary: e.target.value });
        let error = this.validateEsalary(this.state.empSalary);
        this.setState({ esalaryError: error })
    }
 
 
changeDeptId=(e)=>{
    this.setState({deptId:e.target.value})
    let error=this.validateDeptId(this.state.deptId)
    this.setState({errorDept:error})
 
}
 
changeDeptName = (e) => {
    this.setState({ deptName: e.target.value });
    const error = this.validateDeptName(e.target.value);
    this.setState({ dnameError: error });
}

GetResult = (e) => {
    let error = this.validateEid(this.state.empId);
    this.setState({ eidError: error })

    let error1 = this.validateEname(this.state.empName);
    this.setState({ enameError: error1 })

    let error2 = this.validateEsalary(this.state.empSalary);
    this.setState({ esalaryError: error2 })

    if (!error && !error1 && !error2) {
        this.setState({ flag: true })

        let employee = new Employee();
        let dep = new Department();
        //dep.setdId(this.state.depNo);

        employee.setId(this.state.empId);
        employee.setName(this.state.empName);
        employee.setSalary(this.state.empSalary);
        employee.setDeptId(this.state.deptId);
        console.log(employee)

        axios.post("http://localhost:1212/create", employee)
            .then(() => {
                document.getElementById("res").innerHTML = "<b>Object Saved Successfully</b>";
            })

        e.preventDefault();


    }
}
 
    GetResultDep = (e) => {
        e.preventDefault();
        let error = this.validateDeptId(this.state.deptId);
        this.setState({ errorDept: error })
 
        let error1 = this.validateDeptName(this.state.deptName);
        this.setState({ dnameError: error1 })
 
        if (!error && !error1) {
            this.setState({ flag: true })
 
            let dep = new Department();
            dep.setId(this.state.deptId);
            dep.setName(this.state.deptName);
            axios.post("http://localhost:1212/create-department", dep)
                .then(() => {
                    document.getElementById("res1").innerHTML = "<b>Object Saved Successfully</b>";
                })
 
            e.preventDefault();
 
 
        }
    }
    render() {
        return (
            <div id="myForm" class="row mt-6">
                <h1 align="center">Employee and Deparment Mangement System</h1>
                <div class="col-md-6" id="emp">
                <h1 align="center">Employee System</h1>
                    <form class="">
                        <div class="form-group">
                            <label for="first" class="fw-bold">Enter Employee Id:</label>
                            <input type='text' value={this.state.empId} onChange={this.changeId} class="form-control border border-info"></input>
                            <font color="red"><b>{this.state.eidError}</b></font>
                        </div>
                        <div class="form-group">
                            <label for="second" class="fw-bold">Enter Employee Name:</label>
                            <input type='text' value={this.state.empName} onChange={this.changeName} class="form-control border border-info"></input>
                            <font color="red" id="in"><b>{this.state.enameError}</b></font>
                        </div>
                        <div class="form-group">
                            <label for="third" class="fw-bold">Enter Employee Salary:</label>
                            <input type='text' value={this.state.empSalary} onChange={this.changeSalary} id="in" class="form-control border border-info"></input>
                            <font color="red" id="in"><b>{this.state.esalaryError}</b></font>
                        </div>
<div>
                    <div class='form-group'>
                <label class='fw-bold'>Department ID</label>
                <input type="text" name="deptId" class='form-control' value={this.state.deptId} onChange={this.changeDeptId}/></div>
                <font color='red'><b>{this.state.errorDept}</b></font>
 
                </div>
                        <button onClick={this.GetResult} id="bt" class="btn btn-primary">Insert</button>&nbsp;
                        <br></br><br></br>
 
                    </form>
 
                    {this.state.flag ?
 
                        <div id="res">
 
                        </div>
                        : ''
                    }
                </div>
                <div class="col-md-4" id="dep">
                    <h1 align="center">Deparment System</h1>
                    <form class="form-horizontal">
                        <div class="form-group">
                            <label for="first" class="fw-bold">Enter Department Number:</label>
                            <input type='text' value={this.state.deptId} onChange={this.changeDeptId} class="form-control border border-info"></input>
                            <font color="red"><b>{this.state.errorDept}</b></font>
                        </div>
                        <div class="form-group">
                            <label for="second" class="fw-bold">Enter Deparment Name:</label>
                            <input type='text' value={this.state.deptName} onChange={this.changeDeptName} class="form-control border border-info"></input>
                            <font color="red" id="in"><b>{this.state.dnameError}</b></font>
                        </div>
                        <button onClick={this.GetResultDep} id="bt" class="btn btn-primary">Insert</button>&nbsp;
                        <br></br><br></br>
 
                    </form>
 
                    {this.state.flag ?
 
                        <div id="res1">
 
                        </div>
                        : ''
                    }
                </div>
            </div>
        );
    }
}