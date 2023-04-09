import React  from "react";
import './App.css';
import Home from "./components/Page1/Home";
import Register from "./components/Register/Register";
import { BrowserRouter as Router, Routes, Route, Link, Redirect} from "react-router-dom";
import Search from "./components/Page2/Search";

const App = () => {
  return(
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>    
    </>
  )}

  export default App;