import React, { useState,useEffect } from 'react';
import axios from 'axios';
import styles from "./style.module.css";
import AOS from "aos";
import "aos/dist/aos.css";




function Add() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
}, []);


  const [flightNumber, setFlightNumber] = useState('')
  const [timeDepart, setTimeDepart] = useState('')
  const [timeArrive, setTimeArrive] = useState('')
  const [cityDepart, setCityDepart] = useState('')
  const [cityArrive, setCityArrive] = useState('')
  const [gate, setGate] = useState('')

  const AddingFlight = (e) => {
    e.preventDefault();

   
    const url = 'http://localhost:4001/flights';

   
    const data = {
      flightNumber:flightNumber,
      timeDepart: timeDepart,
      timeArrive: timeArrive,
      cityDepart: cityDepart,
      cityArrive :cityArrive,
      gate : gate,
    };

    axios.post(url, data)
      .then(response => {
        console.log('Data added successfully', response.data);
        alert('Data added successfully');
      })
      .catch(error => {
    
        console.error('Error adding data:', error);
      });
  };

  
  return (
    <div className={styles.main}>
     
     <div className={styles.main1}  data-aos="flip-left" >
    <h1 className={styles.titel2}>Adding a flight</h1>
 <form onSubmit={AddingFlight} className={styles.form}>
      <label>
       <span className={styles.span} > flightNumber:</span>
        <input
          type="text"
          value={flightNumber}
          onChange={e => setFlightNumber(e.target.value)}
          className={styles.input}

        />
      </label>
      <br />
      <label>
        <span className={styles.span}> timeDepart:</span>
        <input
          type="text"
          value={timeDepart}
          onChange={e => setTimeDepart(e.target.value)}
          className={styles.input}
        />
      </label>
      <br />
      <label>
      <span className={styles.span}> timeArrive:</span>
        <input
          type="text"
          value={timeArrive}
          onChange={e => setTimeArrive(e.target.value)}
          className={styles.input}
        />
      </label>
      <br />
      <label>
      <span className={styles.span}> cityDepart:</span>
        <input
          type="text"
          value={cityDepart}
          onChange={e => setCityDepart(e.target.value)}
          className={styles.input}
        />
      </label>
      <br />
      <label>
      <span className={styles.span}> cityArrive:</span>
        <input
          type="text"
          value={cityArrive}
          onChange={e => setCityArrive(e.target.value)}
          className={styles.input}
        />
      </label>
      <br />
      <label>
      <span className={styles.span}> gate:</span>
        <input
          type="text"
          value={gate}
          onChange={e => setGate(e.target.value)}
          className={styles.input}
        />
      </label>
      <br />

      <button type="submit" className={styles.button} >Add Data</button>
    </form>
    </div>
    </div>
  );
};

export default Add