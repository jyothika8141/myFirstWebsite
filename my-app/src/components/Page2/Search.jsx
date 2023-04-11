import React, { useEffect } from "react";
import image from "./land.jpeg";
import { Button} from '@mui/material';

import "./Search.css";
import {useState} from 'react';

function Search(){
    const [form, setForm] = useState({
        district: ""
    });

    const [details, setDetails] = useState([]);

    const updateForm = (e) => {
        setForm ({
            ...form,
            [e.target.name]: e.target.value,
        })
        console.log(e.target)
        console.log(form)
    }

    useEffect(() => {
        fetch('userdetails/get')
        .then(response => response.json())
        .then((data) => {
            setDetails(data);})
        }, []);
        
    console.log(details);  

    
    const userinfo = details.map(detail => (
        <div className="cards">
            <div className="container">
            <div className="img">
                    <img src={ image } alt="image" width="450px"/>
                </div>
                <div className="title">
                    <h3>{detail.name_place}</h3>
                    <h3><b> ₹ {detail.price} </b></h3> 
                </div>
                <h4>{detail.district}, {detail.state}</h4>
                <br></br>
                <div className="info">
                    <h4>Contact details:</h4>
                    <h5> Name : {detail.name_person}</h5>
                    <h5>Phone : {detail.phone}</h5>
                    <h5>Email : {detail.email}</h5>
                    
                </div>
                <div className="bookBtn">
                <Button>BOOK</Button>
                </div>
                
            </div>
  
         </div>
    ))
    return(
        <div className="main">

             <div className="explorepage">
            <h3> Search </h3>
            <form className="Search" >
                <input 
                    type ="text" 
                    className = "form-input"
                    name ="state" 
                    placeholder="State"
                    onChange ={updateForm} 
                    value = {form.state}
                />
                <button 
                type = "submit"
                id= "searchbtn"
                className = "searchbtn" 
                > Search </button>
            </form>
            </div>
            <div class="card">

                    { userinfo }
            
              </div> 
            </div>
    )
}

export default Search;