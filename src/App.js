import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages";
import SinginPage from "./pages/singin";

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact><Home/></Route>
                <Route path='/signin'> <SinginPage/> </Route>
            </Switch>
        </Router>
    );
}

export default App;
