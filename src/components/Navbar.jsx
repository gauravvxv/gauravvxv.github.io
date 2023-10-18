import React from "react";
import "../styles/navbar.css";
import resume from "../Images/resume.pdf"
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
export const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);


  const handleresume = () => {
    window.open('https://drive.google.com/file/d/1w2f9GVQUNgWW3vf4-n3b9dD0U2pTLkSV/view?usp=sharing');
  }


  return (
    <div id="nav-menu">
      <nav className="main-nav">
        <div className="logo">
          <h2>Gaurav</h2>
        </div>
        <div className={menuVisible ? "menu-link mobile-menu-link" :"menu-link" }>
          <ul>
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
          </ul>
        </div>

        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href={resume}
                target="_blank"
                download="Gaurav Sharma-Full Stack Web Developer (1).pdf"
                className="nav-link resume"
                id="resume-link-1"
              >
                <button id="resume-button-1" onClick={handleresume} >
                  Resume
                </button>
              </a>
            </li>
          </ul>
          <div className="hamburger-menu">
            <a href="#" onClick={() => setMenuVisible(!menuVisible)}>
              <GiHamburgerMenu />
            </a>
          </div>

        </div>
      </nav>
    </div>
  )
}