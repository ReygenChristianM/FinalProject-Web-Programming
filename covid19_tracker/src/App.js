//import React, { Component, useEffect, useState } from 'react';
import Card from './components/Display';
import "./App.css";
import axios from 'axios';
import GlobalCase from './components/Country'
import Indo from './components/Indonesia';
import Prov from './components/Provinsi';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";


const App = ()=> {
  return (
    <Router>
    <div className="App" >
      <nav>
      <h1>Covid19 Tracker</h1>
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
      <Route path="/" component={Home}/>
      <Route path="/Indonesia" component={Indo}/>
      <Route path="/Provinsi" component={Prov}/>
      </Switch>
    </div>
    </Router>
  );

  

}

const Home = ()=> {
  return (
    <div >
    <GlobalCase/>
    </div>
  );

};

export default App;