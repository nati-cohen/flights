import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";




function Show() {
    const [airlines, setAirlines] = useState([]);

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    useEffect(() => {
        axios
            .get("http://localhost:4001/flights")
            .then((res) => setAirlines(res.data))
            .catch((err) => console.log(err.message));
    }, []);



    return (
        <div>
            <h1>Welcome to the <span className={styles.titel1}> flights app</span></h1>

            <h2 className={styles.titel}>All flights:</h2>
            <ul className={styles.flights}>
                {airlines.map(flight => (
                    <Link to={`/AirInfo/${flight.id}`} key={flight.id} ><li data-aos="flip-down"className={styles.li} >
                        <span className={styles.number}>{flight.flightNumber}</span>
                        <span> - {flight.cityDepart} to {flight.cityArrive}</span>

                    </li></Link >
                ))}
            </ul>
            <Link to={`/Add`}><div className={styles.add}  >+</div> </Link >
        </div>

    );
}

export default Show




