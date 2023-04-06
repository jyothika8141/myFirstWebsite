import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from "react";


function LoginProfile() {

    const [detail, setDetail] = useState({
        name_person: "river",
        email: "email@email.com",
        phone: "",
        name_place: "",
        place_speciality: "",
        accommodation: "",
        address: "",
        district: "",
        state: "",
        pincode: "",
    });
    
    const { id } = useParams();

    function getUserDetails() {
        React.useEffect(() => {
        fetch("../userdetails/get" + "?id=" + id )
        .then((response) => response.json())
        .then((data) => {
            setDetail(() => {
                return { name_person: data.name_person, 
                    email : data.email,
                    phone : data.phone,
                    name_place : data.name_place,
                    place_speciality : data.place_speciality,
                    accommodation : data.accommodation,
                    address : data.address,
                    district : data.district,
                    state : data.state,
                    pincode : data.pincode,
                 }
                });
        });
        }, []);
    };

    getUserDetails()

    return (
        <div>
            <h1>{ id }</h1>
            <p>Name of person: { detail.name_person }</p>
            <p>Email: { detail.email }</p>
            <p>Phone: { detail.phone }</p>
            <p>Name of place: { detail.name_place }</p>
            <p>Place speciality: { detail.place_speciality }</p>
            <p>Accommodation: { detail.accommodation }</p>
            <p>Address: { detail.address }</p>
            <p>District: { detail.district }</p>
            <p>State: { detail.state }</p>
            <p>Pincode: { detail.pincode }</p>
        </div>
    )
}

export default LoginProfile;








