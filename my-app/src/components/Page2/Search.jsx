import React from "react";
import Navbar from "../Navbar";
import "./Search.css";
import Card from '@material-ui/core/Card';
import {useState} from 'react';

function Search(){
    const [form, setForm] = useState({
        district: "",
        state: ""
    });

    const updateForm = (e) => {
        setForm ({
            ...form,
            [e.target.name]: e.target.value,
        })
        console.log(e.target)
        console.log(form)
    }

    return(
        <div>
            <Navbar /> 
            <div class="explore-page">
            <h3> Search </h3>
            <form class="Search" >
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
                <button 
                type = "submit"
                id= "searchbtn"
                className = "searchbtn" 
                > Search </button>
            </form>
            </div>
            <div class="card">
              {" "}
              <Card>
                {" "}
                {" "}
                <Card.Body>
                  {" "}
                  <Card.Title>Abcdef</Card.Title> {" "}
                  <Card.Subtitle className="mb-2 text-muted">
                    Ghij, Lmno
                  </Card.Subtitle>{" "}
                  {" "}
                  <Card.Text>
                    Name:
                    Phone:
                    Email:
                    {" "}
                  </Card.Text>{" "}
                 ``
                </Card.Body>{" "}
                
              </Card>{" "}
              </div>
            </div>

    )
}

export default Search;