import logo from './logo.svg';
import './App.css';
import Input from './comp/input.jsx'
import { useState } from 'react';
import Display from './comp/display.jsx';




function App() {
  
  let arr=[{id:1,val:"hamdi"},{id:2,val:"sjws"}];
  return (
    <div className="App">
      <Input arr={arr}/>
      {/* <Display  arr={arr}/> */}

     
    </div>
  );
}

export default App;
