//import React, { Component, useEffect, useState } from 'react';
import "./App.css";
import GlobalCase from './components/Global'
import IndoCase from './components/Indonesia';  
import Prov from './components/Provinsi';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";


const App = ()=> {
  return (
    <Router>
    <div className="App" >
      <nav>
      <h1 align='center'>Covid-19 Tracker</h1>
      <ul>
        <Link to="/">
        <li>Global</li>
        </Link>
        <Link to="/Indonesia">
        <li>Indonesia</li>
        </Link>
        <Link to="/Provinsi">
        <li>Provinsi</li>
        </Link>
      </ul>
      </nav>

      <Switch>
      <Route path="/" exact component={GlobalCase}/>
      <Route path="/Indonesia" component={IndoCase}/>
      <Route path="/Provinsi" component={Prov}/>
      </Switch>
    </div>
    </Router>
  );

  

}

export default App;