import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NumberFormat from 'react-number-format';

const IndoCase =()=>{
    const [confirmed, setConfirmed]= useState([]);
    const [recovered, setRecovered]= useState([]);
    const [death, setDeath]=useState([]);

useEffect(() => {
  axios
    .get("https://indonesia-covid-19.mathdro.id/api")
    .then((response) => {
      setConfirmed(response.data.jumlahKasus)
      setRecovered(response.data.sembuh)
      setDeath(response.data.meninggal)
    });   
}, []);

return (
    <>
    <h3>Jumlah Kasus Covid19 di Indonesia</h3>
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

export default IndoCase;