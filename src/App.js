import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, {useState} from "react";
import {Router} from '@reach/router';
import Calculator from '../src/components/Calculator.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Calculator path = "/"></Calculator>
      </Router>
    </div>
  );
}

export default App;
