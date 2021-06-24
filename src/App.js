import React from "react";
import './App.css';
import Navbar from "./components/Navbar/index";
import {BrowserRouter as Router} from "react-router-dom";
import SideBar from "./components/SideBar";

function App() {
    return (
        <Router>
            <SideBar/>
            <Navbar/>
        </Router>
    );
}

export default App;
