import React from "react"
import './App.css';
import {useState, useEffect} from "react";
import GetQuestion from "./components/GetQuestion";



function App() {

  // Using the other two variables to create our URL

  return (
    <div className="App">
      <h1>The Jeopardy App</h1>
      <GetQuestion />
    </div>
  );
}


export default App
