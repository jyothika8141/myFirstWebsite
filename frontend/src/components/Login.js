import React, { Component } from "react";
import { Button, Grid, Typography, TextField, FormHelperText, FormControl, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import { Link } from "react-router-dom";


export default class Login extends Component {
    defaultAvailable = true;

    constructor(props) {
        super(props);
        this.state = {
            available: this.defaultAvailable,
            name_person: "",
            email: "",
            phone: "",
            name_place: "",
            place_speciality: "",
            address: "",
            district: "",
            state: "",
            pincode: "",
        };
        this.handleRegisterPlace = this.handleRegisterPlace.bind(this);
        this.handleNamePersonChange = this.handleNamePersonChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleNamePlaceChange = this.handleNamePlaceChange.bind(this);
        this.handlePlaceSpecialityChange = this.handlePlaceSpecialityChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleDistrictChange = this.handleDistrictChange.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handlePincodeChange = this.handlePincodeChange.bind(this);
    }

    handleAvailableChange = (e) => {
        this.setState({
            available: e.target.value === "true" ? true : false,
        });
    }

    handleNamePersonChange = (e) => {
        this.setState({
            name_person: e.target.value,
        });
    }

    handleEmailChange = (e) => {
        this.setState({ 
            email: e.target.value,
        });
    }

    handlePhoneChange = (e) => {
        this.setState({
            phone: e.target.value,
        });
    }

    handleNamePlaceChange = (e) => {
        this.setState({
            name_place: e.target.value,
        });
    } 

    handlePlaceSpecialityChange = (e) => {
        this.setState({
            place_speciality: e.target.value,
        });
    }

    handleAddressChange = (e) => {
        this.setState({
            address: e.target.value,
        });
    }

    handleDistrictChange = (e) => {
        this.setState({
            district: e.target.value,
        });
    }

    handleStateChange = (e) => {
        this.setState({
            state: e.target.value,
        });
    }

    handlePincodeChange = (e) => {
        this.setState({
            pincode: e.target.value,
        });
    }

    handleRegisterPlace = (e) => {
      console.log(this.state);
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          available: this.state.available,
          name_person: this.state.name_person,
          email: this.state.email,
          phone: this.state.phone,
          name_place: this.state.name_place,
          place_speciality: this.state.place_speciality,
          address: this.state.address,
          district: this.state.district,
          state: this.state.state,
          pincode: this.state.pincode,
        }),
      };
      fetch("/userdetails/create", requestOptions)
      .then((response) => response.json())
      .then((data) =>  console.log(data));
      }

    render() {
      return (
        <Grid container spacing={1}>
            <Grid item xs={12} align="center">
                <Typography component="h4" variant="h4">
                Register your place
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <FormControl component="fieldset">
                    <FormHelperText>
                        <div align="center">
                            Available
                        </div>  
                    </FormHelperText>
                    <RadioGroup row defaultValue="true" onChange={this.handleAvailableChange}>
                        <FormControlLabel value="true" control={<Radio color="primary" />} label="Yes" labelPlacement="bottom" />
                        <FormControlLabel value="false" control={<Radio color="secondary" />} label="No" labelPlacement="bottom" />
                    </RadioGroup>
                  </FormControl>
            </Grid>
            <Grid item xs={12} align="center">
              <FormControl>
                <TextField required={true} type="text" defaultValue="" onChange={this.handleNamePersonChange} inputProps={{min: 0, style: { textAlign: 'center' }}} />
                <FormHelperText>
                  <div align="center">
                    Name of the person
                  </div>
                </FormHelperText>
                <TextField required={true} type="text" defaultValue="" onChange={this.handleEmailChange} inputProps={{min: 0, style: { textAlign: 'center' }}} />
                <FormHelperText>
                  <div align="center">
                    email
                  </div>
                </FormHelperText>
                <TextField required={true} type="text" defaultValue="" onChange={this.handlePhoneChange} inputProps={{min: 0, style: { textAlign: 'center' }}} />
                <FormHelperText>
                  <div align="center">
                    phone number
                  </div>
                </FormHelperText>
                <TextField required={true} type="text" defaultValue="" onChange={this.handleNamePlaceChange} inputProps={{min: 0, style: { textAlign: 'center' }}} />
                <FormHelperText>
                  <div align="center">
                    Name of the place
                  </div>
                </FormHelperText>
                <TextField required={true} type="text" defaultValue="" onChange={this.handlePlaceSpecialityChange} inputProps={{min: 0, style: { textAlign: 'center' }}} />
                <FormHelperText>
                  <div align="center">
                    Speciality of the place
                  </div>
                </FormHelperText>
                <TextField required={true} type="text" defaultValue="" onChange={this.handleAddressChange} inputProps={{min: 0, style: { textAlign: 'center' }}} />
                <FormHelperText>
                  <div align="center">
                      address
                  </div>
                </FormHelperText>
                <TextField required={true} type="text" defaultValue="" onChange={this.handleDistrictChange} inputProps={{min: 0, style: { textAlign: 'center' }}} />
                <FormHelperText>
                  <div align="center">
                      district
                  </div>
                </FormHelperText>
                <TextField required={true} type="text" defaultValue="" onChange={this.handleStateChange} inputProps={{min: 0, style: { textAlign: 'center' }}} />
                <FormHelperText>
                  <div align="center">
                      state
                  </div>
                </FormHelperText>
                <TextField required={true} type="text" defaultValue="" onChange={this.handlePincodeChange} inputProps={{min: 0, style: { textAlign: 'center' }}} />
                <FormHelperText>
                  <div align="center">
                      pincode
                  </div>
                </FormHelperText>
                
              </FormControl>
            </Grid>
            <Grid item xs={12} align="center">
              <Button color="secondary" variant="contained" onClick={this.handleRegisterPlace}>
                Register
              </Button>
            </Grid>
            <Grid item xs={12} align="center">
              <Button color="primary" variant="contained" to="/" component={Link}>
                Back
              </Button>
            </Grid>
        </Grid>

      );
    }
}