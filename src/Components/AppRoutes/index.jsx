import React from 'react'
import styles from "./style.module.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Show from '../show';
// import Layout from '../Layout';
import AirInfo from '../AirInfo';
import Add from '../Add';


function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>
       
            {/* <Route path="/" element ={<Layout/>} /> */}
            <Route index element ={<Show/>}/>
            <Route path="/AirInfo/:id" element ={<AirInfo/>} />
            <Route path="/Add" element ={<Add/>} />
            
        
    </Routes>
    </BrowserRouter>
       
  )
}

export default AppRoutes