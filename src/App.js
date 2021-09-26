import './App.css';
import Header from './MyComponents/Header';
import TextForm from './MyComponents/TextForm';
// import About from './MyComponents/About';
// import React, { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
 

  return (
    <>
        {/* <Router> */}
      <Header title="TextUtils" AboutText="About us"/>
      <div className="container my-3">
      {/* <Switch> */}
          {/* <Route path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}
          
          {/* <Route path="/"> */}
            <TextForm heading="Enter Your Text Here" />
          {/* </Route> */}
      {/* </Switch> */}
      
      {/* <About title="About us"/> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;