import React, { Component } from "react";
import PlaceSelect from './PlaceSelect';
import PlaceDisplay from './PlaceDisplay';
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
                
            </Routes>

        </Router>

      );
    }
}