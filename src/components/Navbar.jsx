import React from "react";
import "../styles/navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import resume from "../Images/Gaurav-Sharma-Resume.pdf"
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);


  const handleresume = () => {
    window.open('https://drive.google.com/file/d/1K_E_Che5KBduqgsZBifmblJuUoy90pmA/view?usp=sharing');
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
            <Link to="home" smooth={true} duration={800}>
                Home
              </Link>
            </li>
            <li>
            <Link to="about" smooth={true} duration={800}>
                About
              </Link>
            </li>
            <li>
            <Link to="skills" smooth={true} duration={800}>
                Skills
              </Link>
            </li>
            <li>
            <Link to="projects" smooth={true} duration={800}>
                Projects
              </Link>
            </li>
            <li>
            <Link to="contact" smooth={true} duration={800}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href={resume}
                target="_blank"
                download="Gaurav-Sharma-Resume.pdf"
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
