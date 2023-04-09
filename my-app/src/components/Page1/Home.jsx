import React from "react";
import Navbar from "../Navbar";
import "./Home.css";
// import Search from "../Page2/Search";
import { Link } from "react-router-dom";
// import Header from "./Header";
// import ScrollToTop from "./ScrollToTop"
// import { img } from "./landscape1.jpg"

const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="home">
        <div className="container_1">
          {/* <img id="bg" src="./landscape1.jpg" alt="landscape" /> */}
          <div className="container_2">
              <h3><b>Exploring the richness of </b></h3>
            <h1>Rural India</h1>
            <p id="para1">
             <b>Ever danced to the tunes of the traditional Indian folk music? Or
              tried your hands on Warli painting? An average Urban Indian is
              unaware of the joys of a quieter, less polluted, and less crowded
              way of life that can be found outside of the cities."</b>
            </p>
            <p><b>
              Let's emabark on a journey to explore the rural areas of India and
              discover the richness of its cultural heritage.
            </b></p>
          </div>
          <div className="explore">
          <Link to="/search"><button id="explore"><b> Explore </b></button></Link> 
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;