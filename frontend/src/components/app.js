import React, { Component } from 'react';
import { render } from 'react-dom';
import HomePage from './HomePage';
import PlaceSelect from './PlaceSelect';
import PlaceDisplay from './PlaceDisplay';
import Login from './Login';
import LoginProfile from './LoginProfile';
import { BrowserRouter as Router, Routes, Route, Link, Redirect} from "react-router-dom";
import "/home/jyothika/myFirstWebsite/weekend_travel/frontend/static/css/index.css"


function App(){
        return (
            <Router>
                <Routes>
                    <Route exact path='/' element={<HomePage />} /> 
                    <Route exact path='/display' element={<PlaceDisplay />} />
                    <Route exact path='/select' element={<PlaceSelect />} />
                    <Route exact path='/login' element={<Login />} />
                    <Route exact path='/loginprofile/:id' element={<LoginProfile />} />
                    
                </Routes>
    
            </Router>
    
          );
    }


const appDiv = document.getElementById('app');
render(<App />, appDiv);