import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./Register.css";
import axios from "axios";

import { motion } from "framer-motion/dist/framer-motion";

export default function Form() {
  const [form, setForm] = useState({
    name_place: "",
    district: "",
    state: "",

    name_person: "",
    phone: "",
    email: "",

    price: "",
    image: null,
  });

  const [imageForm, setImageForm] = useState(null);

  const updateForm = (e) => {
    if ([e.target.name] === "image") {
      setImageForm({
        image : e.target.files,
      });
      console.log(e.target.files);
    }
    else {setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    // console.log(e.target);
    console.log(form);
  };}
    

  const config = {
    headers: {
      Accept: "application/json, text/plain, /",
      "Content-Type": "multipart/form-data",
    },
    baseURL: "http://127.0.0.1:8000",
  };

  const data = {
    name_place: form.name_place,
    district: form.district,
    state: form.state,
    name_person: form.name_person,
    email: form.email,
    phone: form.phone,
    price: form.price,
    image: imageForm.image,
  };

  const submitForm = (e) => {
    console.log("in here")
    console.log(data)
    // window.confirm("Your place has been successfully registered.");
    

    e.preventDefault();
    axios
      .post("/userdetails/create", data, config)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <motion.div
      className="register"
      initial={{ width: "50%" }}
      animate={{ width: "100%", transition: { duration: 0.8 } }}
      exit={{ x: window.innerWidth, transition: { duration: 0.7 } }}
    >
      <div
        className="form-box"
        initial={{ height: 0 }}
        animate={{ height: "85vh", transition: { duration: 0.1 } }}
        exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
      >
        <h1 className="form-title"> Register your place </h1>
        <form class="Labels">
          <div className="person-details">
            <label>
              <b> Person details </b>
            </label>
            <input
              type="text"
              className="form-input"
              name="name_person"
              placeholder="Name"
              onChange={updateForm}
              value={form.name_person}
            />

            <input
              type="text"
              className="form-input"
              name="phone"
              placeholder="Phone number"
              onChange={updateForm}
              value={form.phone}
            />
            <input
              type="text"
              className="form-input"
              name="email"
              placeholder="Email"
              onChange={updateForm}
              value={form.email}
            />
          </div>
          <div className="place-details">
            <label>
              <b> Place details </b>
            </label>
            <input
              type="text"
              className="form-input"
              name="name_place"
              placeholder="Name of the place"
              onChange={updateForm}
              value={form.name_place}
            />

            <input
              type="text"
              className="form-input"
              name="district"
              placeholder="District"
              onChange={updateForm}
              value={form.district}
            />

            <input
              type="text"
              className="form-input"
              name="state"
              placeholder="State"
              onChange={updateForm}
              value={form.state}
            />

            <input
              type="text"
              className="form-input"
              name="price"
              placeholder="Price per night"
              onChange={updateForm}
              value={form.price}
            />

            <input
              type="file"
              className="file"
              name="image"
              placeholder="Add image"
              onChange={updateForm}
              value={form.image}
            />
          </div>

          <button type="submit" className="submitBtn" onClick={submitForm}>
            {" "}
            {/* <Link id="t" to="/"> */}
              {" "}
              Submit{" "}
            {/* </Link> */}
          </button>
        </form>
      </div>
    </motion.div>
  );
}
