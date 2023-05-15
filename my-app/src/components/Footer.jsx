import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer1">
          <h3>
            {" "}
            <b> About Us </b>{" "}
          </h3>
          <div className="para">
            {" "}

              {" "}
              Hello, and welcome to Heritage Trails! My name is
              Jyothika, and I am the founder of this initiative. As a passionate
              traveler and a local community member, I believe in the power of
              responsible and sustainable tourism. By promoting local culture
              and heritage, creating authentic rural experiences, and supporting
              indigenous jobs, we aim to build a vibrant and inclusive tourism
              sector that benefits both travelers and local communities.{" "}
{" "}
          </div>
        </div>
        <div className="footer2">
          <h3>
            {" "}
            <b> Contact Us </b>{" "}
          </h3>
          {/* <p id="contact">
              Email: heritagetrails@email.com
          </p>
          <p>
              Phone: +91 1234567890 
          </p> */}
        </div>
      </div>
    </footer>
  );
}
