import React, { useEffect } from "react";
import { Button } from '@mui/material';
// import { Search } from '@mui/icons-material';
import { FaSearch } from 'react-icons/fa';
import "./Search.css";
import {useState} from 'react';


function SearchFunc(){
    const [form, setForm] = useState({
        state: ""
    });

    const [details, setDetails] = useState([]);
    const [details2, setDetails2] = useState([]);


    const updateForm = (e) => {
        setForm ({
            ...form,
            [e.target.name]: e.target.value,
        })
        console.log(e.target)
        console.log(form)
    }


    useEffect(() => {
        console.log('in here')
        fetch('http://127.0.0.1:8000/userdetails/get')
        .then(response => response.json())
        .then((data) => {
            setDetails(data);
            setDetails2(data);
            console.log(data);
        }).catch((error) => {
            console.log(error);
        })

        }, []);
        

    const userinfo = Array.from(details).map((detail) => (
        <div className="cards">
            <div className="container">
            <div className="img">
                    <img src={ detail.image } alt="" width="450px" height="300px"/>
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
                <Button> <b> BOOK </b> </Button>
                </div>
                

            </div>
  
         </div>
    ))
    
    function Searching(){
        console.log(form.state)
        if (form.state === ""){
           setDetails(details2)
        }
        else{
        let detail_state= [];
        for(var i=0; i<details2.length; i++){
            if(form.state === details2[i].state){
                console.log("found");    
                detail_state.push(details2[i]);           
            }
            else{
                console.log("not found");
            }
        }

        console.log(detail_state);
        setDetails(detail_state);
    }
}

    const handleKeypress = e => {
        if (e.keyCode === 13) {
        Searching();
        }
    };


    return(
        <div className="main">
            <div className="search" tabIndex={0} onKeyDown = {handleKeypress}>
            <FaSearch className="search-icon" />
                <input 
                
                    type ="text" 
                    className = "form-input"
                    name ="state" 
                    placeholder=" State"
                    onChange ={updateForm} 
                    value = {form.state}
                />
            

            </div>
            <div class="card">

                    { userinfo }
            
              </div> 
            </div>
    )
}

export default SearchFunc;