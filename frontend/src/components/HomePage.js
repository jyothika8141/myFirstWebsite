import React, { Component } from "react";
import PlaceSelect from './PlaceSelect';
import PlaceDisplay from './PlaceDisplay';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route, Link, Redirect} from "react-router-dom";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <Router>
            <Routes>
                <Route exact path='/' element=<p> This is the HomePage </p> /> 
                <Route exact path='/display' element={<PlaceDisplay />} />
                <Route exact path='/select' element={<PlaceSelect />} />
                <Route exact path='/login' element={<Login />} />
                
            </Routes>

        </Router>

      );
    }
}