
import React from 'react';
import './App.css'; 

function Parent() {
  return (
    <div className="parent">
      I am a Parent Component
      <Child />
    </div>
  );
}

function Child() {
  return (
    <div className="child">
      I am a Child of Parent Component
      <Child2/>
    </div>
  );
}

function Child2() {
  return (
    <div className="child-of-child">
      I am a Child of Child Component
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Parent />
    </div>
  );
}

export default App;

