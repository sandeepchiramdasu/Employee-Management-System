import React from "react";
import Navbar from "./components/Navbar";
import './App.css'
import {Routes,Route} from 'react-router-dom';
import AddEmp from "./components/AddEmp";
import Home from "./components/Home";
import EditEmp from "./components/EditEmp";
const App =()=>{
  return(
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/addEmp" element={<AddEmp />}></Route>
        <Route path="/editEmp/:id" element={<EditEmp />}></Route>
      </Routes>
    </div>
  )
}

export default App;
