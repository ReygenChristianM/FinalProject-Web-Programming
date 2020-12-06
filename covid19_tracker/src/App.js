import React, { Component, useEffect, useState } from 'react';
import Card from './components/Display';
import "./App.css";
import axios from 'axios';
import GlobalCase from './components/Country'
//import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

// class App extends Component{

// state={
//   users :[],
// }

//   componentDidMount(){
//   //   fetch('https://jsonplaceholder.typicode.com/users')
//   // .then(response => response.json())
//   // .then(json => this.setState({users:json}));
//   axios
//     .get("https://jsonplaceholder.typicode.com/users")
//     .then((response) => this.setState({users:response.data}));
//   }

  
//   render(){
//     return(
//       <>
//       {
//         this.state.users.map((item)=>{
//           return(
//             <Card name={item.name} username={item.username} email={item.email} phone={item.phone}/>
//           )
//         })
//       }
//       </>
//     )
//   }
// }


//Functional// 
const App = ()=> {
// const [confirmed, setConfirmed]= useState([]);
// const [recovered, setRecovered]= useState([]);
// const [death, setDeath]=useState([]);

// useEffect(() => {
//   axios
//     .get("https://covid19.mathdro.id/api")
//     .then((response) => {
//       setConfirmed(response.data.confirmed.value)
//       setRecovered(response.data.recovered.value)
//       setDeath(response.data.deaths.value)
//     });
        
  
// }, []);
  //console.log(global);
  return (
    <div className="App">
    <h1>Covid19 Tracker</h1>
    <GlobalCase/>
    </div>
  );
    
  
  };
export default App;