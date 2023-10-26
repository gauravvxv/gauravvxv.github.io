import React from "react";
import "../styles/navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import resume from "../Images/Gaurav Sharma.pdf"
import { useState } from "react";
export const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);


  const handleresume = () => {
    window.open('https://drive.google.com/file/d/1JjlBWWmUZk_45rRkg8o14zt8NgmCDgGj/view?usp=sharing');
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
                download="Gaurav Sharma.pdf"
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