import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';

const GlobalCase =()=>{
    const [confirmed, setConfirmed]= useState([]);
    const [recovered, setRecovered]= useState([]);
    const [death, setDeath]=useState([]);

useEffect(() => {
  axios
    .get("https://covid19.mathdro.id/api")
    .then((response) => {
      setConfirmed(response.data.confirmed.value)
      setRecovered(response.data.recovered.value)
      setDeath(response.data.deaths.value)
    });   
}, []);

return (
    <>
    <h3>Jumlah Kasus Seluruh Dunia</h3>
   <div className="Adjust"> 
   <div className="Card">
    <label style={{color: "blue"}}>Positif</label>
    <p>{confirmed}</p>
   </div>
   <div className="Card">
    <label style={{color: "red"}}>Meninggal</label>
    <p>{death}</p>
   </div>
   <div className="Card">
    <label style={{color: "green"}}>Sembuh</label>
    <p>{recovered}</p>
   </div>
  
  
  </div>
    </>
  );
    
}

export default GlobalCase;