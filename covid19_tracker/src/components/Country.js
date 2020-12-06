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
    <h3>Jumlah kasus Seluruh Dunia</h3>
    
  <p>{confirmed}</p>
  <p>{recovered}</p>
  <p>{death}</p>
    </>
  );
    
}

export default GlobalCase;