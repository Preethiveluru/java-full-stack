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

import { Component } from 'react';
import './Calculator.css';
class App extends Component {
  render() {
    return (

      

      <div className="calculator">
        <div className="input-group">
          <label>No 1</label>
          <input type="text" />
        </div>
        <div className="input-group">
          <label>No 2</label>
          <input type="text" />
        </div>
        <div className="input-group">
          <label>Oper</label>
          <input type="text" />
        </div>
        <div className="input-group">
          <button>Calculate</button>
        </div>
      </div>



    )
  }
}
export default App;