import React from "react";
import "../styles/navbar.css";
import logo1 from "../Images/logo.png.png";
import resume from "../Images/resume.pdf"

export const Navbar = () => {

const handleresume = () =>{
  window.open('https://drive.google.com/file/d/1w2f9GVQUNgWW3vf4-n3b9dD0U2pTLkSV/view?usp=sharing');
}
  

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
                href={resume}
                target="_blank"
                download="Gaurav Sharma-Full Stack Web Developer (1).pdf"
                className="nav-link resume"
                id="resume-link-1"
              >
                <button className="button" id="resume-button-2" onClick={handleresume} >
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
