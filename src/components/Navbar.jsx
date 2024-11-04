import React, { useState } from "react";
import "../styles/navbar.css"; // You can still keep this for any additional styles
import { GiHamburgerMenu } from "react-icons/gi";
import resume from "../Images/Gaurav-Sharma-Resume.pdf";
import { Link } from "react-scroll";
import Theme from "./Theme";

export const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleresume = () => {
    window.open('https://drive.google.com/file/d/1K_E_Che5KBduqgsZBifmblJuUoy90pmA/view?usp=sharing');
  };

  return (
    <div id="nav-menu">
      <nav className="w-full h-[8.5rem] fixed bg-black flex justify-between items-center p-5 shadow-md transition-shadow duration-300 ease-in-out">
        {/* LOGO */}
        <div className="text-6xl pl-20 text-gray-400 hover:text-white">
          <h2>Gaurav</h2>
        </div>

        {/* MENU LINKS */}
        <div className={`menu-link ${menuVisible ? "hidden" : "hidden"} md:flex md:space-x-4 transition-all duration-300 ease-in-out`}>
          <ul className="flex text-3xl flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-24 text-gray-400 cursor-pointer">
            <li>
              <Link to="home" smooth={true} duration={800} className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={800} className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={800} className="hover:text-white">
                Skills
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={800} className="hover:text-white">
                Projects
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={800} className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <a
                href={resume}
                target="_blank"
                download="Gaurav-Sharma-Resume.pdf"
                className="nav-link resume"
                id="resume-link-1"
              >
                <Link
                  id="resume-button-1"
                  onClick={handleresume}
                  className="hover:text-white"
                >
                  Resume
                </Link>
              </a>
            </li>
          </ul>
        </div>

        {/* Theme Toggle */}
        <div className="pr-20 hover:text-white">
          <Theme />
        </div>

        {/* Hamburger Menu */}
        <div className="hamburger-menu pr-20 md:hidden">
          <a href="#" onClick={() => setMenuVisible(!menuVisible)}>
            <GiHamburgerMenu className="text-5xl text-gray-400 hover:text-white" />
          </a>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuVisible && (   
        <div className="absolute top-28  left-0 w-full h-[200px] bg-black shadow-lg p-10  transition-all duration-300 ease-in-out md:hidden">
          <ul className="flex flex-col space-y-6 text-gray-400 text-2xl">
            <li>
              <Link to="home" smooth={true} duration={800}  className="nav-link" onClick={() => setMenuVisible(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={800}  className="hover:text-white" onClick={() => setMenuVisible(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={800}  className="hover:text-white" onClick={() => setMenuVisible(false)}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={800}  className="hover:text-white" onClick={() => setMenuVisible(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={800}  className="hover:text-white" onClick={() => setMenuVisible(false)}>
                Contact
              </Link>
            </li>
            <li>
              <a
                href={resume}
                target="_blank"
                download="Gaurav-Sharma-Resume.pdf"
                id="resume-link-1"
                >
                <button
                  id="resume-button-1"
                  className="hover:text-white"
                  onClick={handleresume}
                >
                  Resume
                </button>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

