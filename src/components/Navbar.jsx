import React from "react";
import "../styles/navbar.css";
import logo1 from "../Images/logo.png.png";

export const Navbar = () => {


  

  return (
    <div id="nav-menu">
      <div className="nav-container">
        <div className="nav-items">
          <ul>
            <li>
              <span className="name">Gaurav</span>
            </li>
            <li>
              <a href="#home" className="nav-link home">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link about">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="nav-link skills">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-link projects">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link contact">
                Contact
              </a>
            </li>
            <li>
              <a
                href="../../resume.pdf"
                target="_blank"
                // download=""
                className="nav-link resume"
                id="resume-link-1"
              >
                <button className="button" id="resume-button-2">
                  <img src={logo1} className="download"/> Resume
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    
    </div>
  );
};
