/*
import './App.css';
import Child3 from './child3'
import  { Component } from 'react';

function App() {
  return (
    <div>
   <h1> welcome</h1>
   <Child1></Child1>
   </div>
  );
}
function Child1(){
  return(
    <>
    <b>hi</b>
    <Child2></Child2>
    </>
  );
}
function Child2(){
  return(
    <>
    <b>hi2</b>
    <Child3></Child3>
    <Child4></Child4>
    
    </>
  );
}

class Child4 extends Component{
  render(){
    return(
    <>
    <b>Child4</b>
    <Child5></Child5>
    </>
    )
  }}

class Child5 extends Component{
  render(){
    return(
    <b>Child5</b>
  )
 }

}

export default App;
*/

/*calculator 

import { Component } from 'react';
import './Calculator.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      n1: 0,
      n2: 0,
      operation: '',
      result: 0
    };
  }

  calculateResult= () =>{

    const { n1, n2, operation } = this.state;
    let result = '';

    const num1 = parseInt(n1);
    const num2 = parseInt(n2);

    switch (operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        result = 0;
    }
  
    this.setState({ result });

  }
render() {
    return (



      <div className="calculator">
        <div className="input-group">
          <label>No 1</label>
          <input type="text" value={this.state.n1} onChange={(e) => this.setState({ n1: e.target.value })} />
        </div>
        <div className="input-group">
          <label>No 2</label>
          <input type="text" value={this.state.n2} onChange={(e) => this.setState({ n2: e.target.value })} />
        </div>
        <div className="input-group">
          <label>Operator</label>
          <select value={this.state.operation} onChange={(e) => this.setState({ operation: e.target.value })} >
            <option value="">Select an Operation</option>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
        </div>

        <div className="input-group">
          <button onClick={this.calculateResult}>Calculate</button>
        </div>
       
         Result={this.state.result} 


      </div>
      
      




    );
  }
}
export default App;
*/


/* props  day-2*/
/*
import { Component } from 'react';
let name="preethi"
function App(props){
  return(
    <div>
    <b>i am a app Component</b>
    <Child name={name} email="chowdarypreethi@gmail.com"></Child>
    <br></br>uid:{props.uid}
    </div>
  );
}

class Child extends Component{
  render(){
    return(
    <b>
      <br></br>Name : {this.props.name}
      <br></br>email : {this.props.email}
      <Child1 location ="chennai"></Child1>
    </b>
    )
  };
}

function Child1(props){
  return(
    <div>
    <br></br>Location : {props.location}
    
    </div>
  );
}
 
Child.defaultProps={

  name: "priya",
  location:"banglore"

}



export default App;
*/

/* states */

/*

import { Component } from 'react';
let name="preethi"
function App(props){
  return(
    <div>
    <b>i am a app Component</b>
    <Child name={name} email="chowdarypreethi@gmail.com"></Child>
    <br></br>uid:{props.uid}
    </div>
  );
}
class Child extends Component{
  constructor(props){
    super(props)
    this.state={
      location : "chennai"
    }
    
  }
  render(){
    return(
    <b>
      <br></br>Name : {this.props.name}
      <br></br>email : {this.props.email}
      <br></br><Child1 location={this.state.location}></Child1>
      
    </b>
    )
  };
}

class Child1 extends Component{
  render(){
    return(
      <b>
        <br></br>I am a Child Component
        <br></br>location : {this.props.location}
      </b>
    )
  }
}

export default App;

*/

/* setstate() */

/*

import { Component } from 'react';
class App extends Component{
  constructor(props){
    super(props)
    this.state={
      name : ''
    }
    
  }

  render(){
    return(
      <b>
        <br></br> enter your name : 
        <input type='text' value={this.state.name}  onChange={(e)=>this.setState({name :e.target.value})}></input>
        <br></br>welcome {this.state.name}
      </b>
    );
  }
}export default App;

*/

/* assesment */
/*

import { Component } from 'react';
class App extends Component{
  constructor(props){
    super(props)
    this.state={
      N1 : 0,
      N2 : 0,
      sum : 0
    }
    
  }
  render(){
    return(
      <b>
        <br></br><h1>addition</h1>  
        <br></br> N1 :
        <input type='text' value={this.state.N1}  onChange={(e)=>this.setState({N1 :e.target.value})}></input>
        <br></br> N2 :
        <input type='text' value={this.state.N2} onChange={(e)=>this.setState({N2 :e.target.value})}></input><br></br>
        <button onClick={() => this.setState({sum : parseInt(this.state.N1)+ parseInt(this.state.N2)})}>sum</button>
        <br></br>addition :{this.state.sum}
      </b>
    );
  }
}export default App;
*/

/* ems */
/*
import { Component } from 'react';

class App extends Component {
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
    const result = `Employee Id: ${Eid} \nEmployee Name: ${Ename} \nEmployee Salary: ${Esalary}`;
    this.setState({ result });
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
      <div>
        <form onSubmit={(e) => { e.preventDefault(); this.handleResult(); }}>
          <br></br>
          <h1>Employee Management System</h1>
          <label>Eid :</label>
          <input type='text' value={this.state.Eid} onChange={this.changeId}></input><br></br>
          <font color="red" ><b>{this.state.eidError}</b></font>
          <br></br>
          <label>Ename:</label>
          <input type='text' value={this.state.Ename} onChange={this.changeName}></input><br></br>
          <font color="red" ><b>{this.state.enameError}</b></font>
          <br></br>
          <label>Esalary:</label>
          <input type='text' value={this.state.Esalary} onChange={this.changeSalary}></input><br></br>
          <font color="red" ><b>{this.state.esalaryError}</b></font>
          <br></br>
          <button type="submit">Submit</button>
        </form>
        <div>
          <br></br>
          <pre>{this.state.result}</pre>
        </div>
      </div>
    );
  }
}

export default App;
*/

/* login page */

/*
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid : '',
      password : '',
      useridError : '',
      passworderror: '',
      result:''
    };
  }
  validateuserid = (userid) =>{
    let re =/^[0-9]+$/;
    if(userid === ''){
      return " userid is required";
    }
    else if(! re.test(userid)){
      return"invalid userid"

    }
    else{
      return null
    }
  }
  validatepassword = (password) =>{
    let re =/^[a-zA-Z]+$/;
    if(password === ''){
      return " password is required";
    }
    else if(! re.test(password)){
      return"invalid password"

    }
    else{
      return null
    }
  }
  changeuserid =(e) => {
    this.setState({userid:e.target.value})
    let error = this.validateuserid(this.state.userid);
    this.setState({useridError : error})
  }
  changepassword =(e) => {
    this.setState({password:e.target.value})
    let error1 = this.validatepassword(this.state.password);
    this.setState({passwordError : error1})
  }
  handleResult = () => {
    let error = this.validateuserid(this.state.userid);
    this.setState({useridErrorError : error})
    let error1 = this.validatepassword(this.state.password);
    this.setState({passwordError : error1})
    

    if(!error && !error1 ){
  
    const result = `login successfull`;
    this.setState({ result });
    }
  }



  render()
  {
    return(
      <div>
        <form>
          <h1>   login page    </h1>
          <label>userid : </label>
          <input type='text' value={this.state.userid} onChange={this.userid}></input><br></br>
          <font color="red" ><b>{this.state.useridError}</b></font><br></br>
          <label>password : </label>
          <input type='text' value={this.state.password} onChange={this.password}></input><br></br>
          <font color="red" ><b>{this.state.password}</b></font>
          <button type="submit">Login</button>
        </form>
        </div>

    );
  }
}

export default App;
*/
/*
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: '',
      password: '',
      useridError: '',
      passwordError: '',
      result: ''
    };
  }

  
  validateuserid = (userid) => {
    let re = /^[0-9]+$/;
    if (userid === '') {
      return 'User ID is required';
    } else if (!re.test(userid)) {
      return 'Invalid User ID';
    } else {
      return null;
    }
  };

  
  validatepassword = (password) => {
    let re = /^[a-zA-Z]+$/;
    if (password === '') {
      return 'Password is required';
    } else if (!re.test(password)) {
      return 'Invalid password';
    } else {
      return null;
    }
  };

  
  changeuserid = (e) => {
    this.setState({ userid: e.target.value });
    let error = this.validateuserid(e.target.value);
    this.setState({ useridError: error });
  };

  
  changepassword = (e) => {
    this.setState({ password: e.target.value });
    let error1 = this.validatepassword(e.target.value);
    this.setState({ passwordError: error1 });
  };

  
  handleResult = (e) => {
    e.preventDefault(); 
    let useridError = this.validateuserid(this.state.userid);
    let passwordError = this.validatepassword(this.state.password);
    this.setState({ useridError, passwordError });

    if (!useridError && !passwordError) {
      this.setState({ result: 'Login successful' });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleResult}>
          <h1>Login Page</h1>
          <label>User ID: </label>
          <input type="text"value={this.state.userid} onChange={this.changeuserid}></input>
          <br></br>
          <font color="red"><b>{this.state.useridError}</b></font>
          <br></br>
          <label>Password: </label>
          <input type="password"value={this.state.password} onChange={this.changepassword}></input>
          <br></br>
          <font color="red"><b>{this.state.passwordError}</b></font>
          <br></br>
          <button type="submit">Login</button>
        </form>

        {this.state.result && (
          <div>
            <h3>{this.state.result}</h3>
          </div>
        )}
      </div>
    );
  }
}

export default App;
*/

/* if rendering */
/*

export default function App(props){
  let n =props.input;
  if (n % 2 ==0)
    return<Even input={n}/>
  else
  return<Odd input={n}/>
}
function Odd(props){
  return(
    <b>{props.input}is odd</b>
  )
}

function Even(props){
  return(
    <b>{props.input}is even</b>
  )
}
*/
/* logical && operator */
/*
export default function App(props){
  let n =props.input;
   return(
    <>
    {n % 2 ==0 && <Even input={n}/>}
    {n % 2 !==0 && <Odd input={n}/>}
  
    </>
   )

}
function Odd(props){
  return(
    <b>{props.input}is odd</b>
  )
}

function Even(props){
  return(
    <b>{props.input}is even</b>
  )
}
*/

/* ternary operator */
/*
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
      flag: null,
      result: ''
    };
  }

  checkEven = (number) => {
    return number % 2 === 0;
  }

  
  checkOdd = (number) => {
    return number % 2 !== 0;
  }

  handleChange = (e) => {
    this.setState({ number: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const num = parseInt(this.state.number); 
    let flag = this.checkEven(num); 

    const result = flag ? `${num} is Even` : `${num} is Odd`;
    this.setState({ flag, result });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Check Even or Odd</h2>
          <div>
            <label>Enter a number: </label>
            <input type="text"value={this.state.number} onChange={this.handleChange}/>
          </div>
          <br />
          <button type="submit">Submitexport</button>
        </form>
        <div>
          <br />
          <b>{this.state.result}</b>
        </div>
      </div>
    );
  }
}

export default App;
*/


/* hooks using usestate */

/*

import { useState } from "react";
 default function Counter(){
  const[count ,setcount]=useState(0)
  const increment =()=>setcount(count+1)
  const decrement =()=>setcount(count-1)

  return(
    <div className="app">
      <button onClick={ increment}>increment</button>
      <button onClick={decrement}>decrement</button>

      <h2>{count}</h2>

    </div>
  )

}
  */

/* lab */

/*
import { useState } from "react";

  export default function App(){
  const[name ,setName]=useState(' ')

  return (
    <div>
     <label>Enter a number: </label>
     <input type="text" value={name} onChange ={(e)=>setName(e.target.value)} />
     
     <br></br>

     <h5>welcome{name}
     </h5>
    
   </div>
  );
}
  */

/* life cycle methods */
/*

import { Component } from "react";

export default class example extends Component{

  constructor(props){
    super(props);
    this.state={count:0}
  }
  componentDidMount(){
    document.getElementById("resultdiv").innerHTML="component did mountphase: count is :"+this.state.count
  }
  componentDidUpdate(){
    document.getElementById("resultdiv").innerHTML="component did updatephase: count is :"+this.state.count

  }
  render(){
    return(
    <>
    <div id ="resultdiv">

    </div>
    <br></br>
    <button onClick={()=>this.setState({count: this.state.count+1})}>clickme</button><br></br>
    count:{this.state.count}
    </>
    )
  }
}
*/
/* use effect */
/*
import { useEffect, useState } from "react";
  export default function Counter(){
  const[count ,setcount]=useState(0)
  useEffect(()=>{
    document.getElementById("app").innerHTML=`you clicked ${count} times`
  })
 

  return(
    <div>
    <div id="app">

    </div>

    <button onClick={()=> setcount(count+1)}> click</button>
    </div>
  )

}
  */
 /* use ref */
/*
 import { useRef } from "react";
 export  default function Ref(){
  const myref=useRef();
  const handleclick=()=>{myref.current.focus()}
  return(
    <div>
    <input ref={myref}type="text"></input>
    <button onClick={handleclick}>focus input</button>
    </div>
  )
 }
*/
/* css styling */

/*
export default function App(){
  let mystyle = {color:'blue',background:'yellow'}

  return(
    <>
    <h1 style={{color:'red',background:'yellow'}}>css inline styling</h1>
    <h1 style={mystyle}>css inline styling</h1>
    </>
  )
}
*/