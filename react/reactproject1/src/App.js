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

import { Component } from 'react';
class App extends Component{
  constructor(props){
    super(props)
    this.state={
      Eid : '',
      Ename : '',
      Esalary : '',
      result :''
    }
    
  }
  render(){
    return(
      <div>
      <form>
        <br></br><h1>Employee Management System</h1>  
        <label>Eid :</label> 
        <input type='text' value={this.state.Eid}  onChange={(e)=>this.setState({Eid :e.target.value})}></input><br></br>
        <label>Ename:</label> 
        <input type='text' value={this.state.Ename} onChange={(e)=>this.setState({Ename :e.target.value})}></input><br></br>
        <label>Esalary:</label> 
        <input type='text' value={this.state.Esalary} onChange={(e)=>this.setState({Esalary :e.target.value})}></input><br></br>
        <button onClick={(e) =>{e.preventDefault(); this.setState( {result:"Employee Id:"+ (this.state.Eid)+"Employee Name:"+ (this.state.Ename)+"Employee Salary:"+ (this.state.Esalary)})}} >submit</button>
        <div>
        <br></br>{this.state.result}
        </div>
      
      </form>
      </div>
      
    );
  }
}export default App;









