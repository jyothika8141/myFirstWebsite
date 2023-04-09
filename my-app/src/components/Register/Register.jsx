import React, {useState} from 'react';
import { Link } from "react-router-dom";
import './Register.css';
import Navbar from '../Navbar';
import axios from 'axios';

export default function Form(){

    const [form, setForm] = useState({
        name_place: "",
        district: "",
        state: "",
        
        name_person: "",
        phone: "",
        email: "",
        
        price: "",
    })

    const updateForm = (e) => {
        setForm ({
            ...form,
            [e.target.name]: e.target.value,
        })
        console.log(e.target)
        console.log(form)
    }
    const data = {
            "name_place" : form.name_place, 
            "district" : form.district,
            "state" : form.state,
            "name_person" : form.name_person,
            "email" : form.email,
            "phone" : form.phone,
            "price" : form.price
        } 

    const submitForm = (e) => {
        window.confirm("Your place has been successfully registered.");

        e.preventDefault(); 
        axios.post('/userdetails/create', data)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
    }
    return (
        <div> 
            <Navbar /> 
        <div className='body'> 
        <div className = "form-box">

            <h1 className = "form-title"> Register your place </h1>
            <p id="para">and earn a side income !!</p>
            <form class="Labels" >

                <div className = "place-details">
                <label><b> Place details </b></label>
            
                <input 
                    type ="text" 
                    className = "form-input"
                    name ="name_place" 
                    placeholder="Name of the place"
                    onChange ={updateForm} 
                    value = {form.name_place}
                />

                <input 
                    type ="text" 
                    className = "form-input"
                    name ="district" 
                    placeholder="District"
                    onChange ={updateForm} 
                    value = {form.district}
                />

                <input 
                    type ="text" 
                    className = "form-input"
                    name ="state" 
                    placeholder="State"
                    onChange ={updateForm} 
                    value = {form.state}
                />
                </div>
                
                <div className = "person-details">
                <label><b> Person details </b></label>
                <input 
                    type ="text" 
                    className = "form-input"
                    name ="name_person" 
                    placeholder="Name"
                    onChange ={updateForm} 
                    value = {form.name_person}
                />

                <input 
                    type ="text" 
                    className = "form-input"
                    name ="phone" 
                    placeholder="Phone number"
                    onChange ={updateForm} 
                    value = {form.phone}
                />
                <input 
                    type ="text" 
                    className = "form-input"
                    name ="email" 
                    placeholder="Email"
                    onChange ={updateForm} 
                    value = {form.email}
                />
                <input 
                    type ="text" 
                    className = "form-input"
                    name ="price" 
                    placeholder="Price per night"
                    onChange ={updateForm} 
                    value = {form.price}
                />
               
               <button 
                type = "submit"
                id= "submitBtn"
                className = "submitBtn" 
                onClick = { submitForm }
                > <Link id="t" to="/"> Submit </Link></button>
                
                </div>

            </form>

        </div>
        </div>
        </div>
    )
}