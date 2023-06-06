import React, { useEffect, useState } from 'react'
import styles from "./style.module.css";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AOS from "aos";
import "aos/dist/aos.css";




function AirInfo() {
  useEffect(() => {
      AOS.init();
      AOS.refresh();
  }, []);
  const [air, setAir] = useState({});


  const [flightNumber, setFlightNumber] = useState('')
  const [timeDepart, setTimeDepart] = useState('')
  const [timeArrive, setTimeArrive] = useState('')
  const [cityDepart, setCityDepart] = useState('')
  const [cityArrive, setCityArrive] = useState('')
  const [gate, setGate] = useState('')
  useEffect(() => {

    axios
      .get(`http://localhost:4001/flights/${id}`)
      .then((res) => {
        setAir(res.data)
        setFlightNumber(res.data.flightNumber)
        setTimeDepart(res.data.timeDepart)
        setTimeArrive(res.data.timeArrive)
        setCityDepart(res.data.cityDepart)
        setCityArrive(res.data.cityArrive)
        setGate(res.data.gate)
      })
      .catch((err) => console.log(err.message));

  }, []);

  let { id } = useParams();



  const handleSubmit = (e) => {
    e.preventDefault();


    const url = `http://localhost:4001/flights/${id}`;


    const data = {
      flightNumber: flightNumber,
      timeDepart: timeDepart,
      timeArrive: timeArrive,
      cityDepart: cityDepart,
      cityArrive: cityArrive,
      gate: gate,
    };

    axios.put(url, data)
      .then(res => {
        console.log('Data added successfully:', res.data);
        alert('Data added successfully:');
        setAir(res.data)
        setFlightNumber(res.data.flightNumber)
        setTimeDepart(res.data.timeDepart)
        setTimeArrive(res.data.timeArrive)
        setCityDepart(res.data.cityDepart)
        setCityArrive(res.data.cityArrive)
        setGate(res.data.gate)
      })
      .catch(error => {

        console.error('Error adding data:', error);
      });
  };

  const handledelete = (e) => {
    e.preventDefault();
    axios.delete(`http://localhost:4001/flights/${id}`)
      .then(res => {
        console.log('Data deleted successfully', res.data);
        alert('Data deleted successfully');
      })
      .catch(error => {
        console.error('Error adding data:', error);
      });

  }



  return (
    <div className={styles.main}>
    <div className={styles.main1} data-aos="flip-left">
      <h1 className={styles.titel2} >flight details</h1>
      <div className={styles.details} >FlightNumber: <span className={styles.details1}>{flightNumber}</span></div>
      <div className={styles.details}>timeDepart: <span className={styles.details1}> {timeDepart}</span></div>
      <div className={styles.details}>timeArrive: <span className={styles.details1}> {timeArrive}</span></div>
      <div className={styles.details}>cityDepart: <span className={styles.details1}> {cityDepart}</span></div>
      <div className={styles.details}>cityArrive:  <span className={styles.details1}> {cityArrive}</span></div>
      <div className={styles.details}>gate:  <span className={styles.details1}>{gate}</span></div>
    </div>

    <div className={styles.main2} data-aos="flip-left">
      <h1 className={styles.titel2}>Flight update</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
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
<div className={styles.buttonall}>
        <button type="submit" className={styles.button} >Update </button>
      <button onClick={handledelete} className={styles.button1} > delete </button>
      </div>
      </form>
    </div>
            </div>
  )
}

export default AirInfo