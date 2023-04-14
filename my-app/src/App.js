import React  from "react";
import './App.css';
import AppRoutes  from "./AppRoutes";


import { BrowserRouter as Router} from "react-router-dom";

import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";



const App = () => {

  return(

    <Router >
      <Navbar />
      <AppRoutes />
      {/* <Footer /> */}
    </Router>  


  )}

  export default App;