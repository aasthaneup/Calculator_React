import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, {useState} from "react";
import {Router} from '@reach/router';
import Calculator from '../src/components/Calculator.jsx';

function App() {

  return (
    <div className="App">
        <Calculator></Calculator>
    </div>
  );
}

export default App;
