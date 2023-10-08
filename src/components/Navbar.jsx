import React from "react";
import "../styles/navbar.css";
import logo from "../Images/image1.png.png";
import { useState, useEffect } from "react";
import logo1 from "../Images/logo.png.png";

export const Navbar = () => {
  const [text, setText] = useState("");
  const texts = [
    "A Full Stack Web Developer",
    "A MERN Developer",
    "A Front-end Developer",
  ]; // Add your text content here
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let animationFrame;

    const typeText = () => {
      if (charIndex < texts[currentIndex].length) {
        setText((prevText) => prevText + texts[currentIndex][charIndex]);
        setCharIndex(charIndex + 1);
        animationFrame = requestAnimationFrame(typeText);
      } else {
        setTimeout(() => {
          setText("");
          setCharIndex(0);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 2000);
      }
    };

    animationFrame = requestAnimationFrame(typeText);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [charIndex, currentIndex, texts]);

const pdfPath ="../../assets/Gaurav Sharma-Full Stack Web Developer.pdf"

  

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
                href="../../assets/Gaurav Sharma-Full Stack Web Developer.pdf"
                target="_blank"
                download="https://drive.google.com/file/d/1w2f9GVQUNgWW3vf4-n3b9dD0U2pTLkSV/view?usp=sharing"
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
      <div className="image-container">
        <img src={logo} className="image1" />
      </div>
      <div className="contain">
        <div className="little">
          <h3 className="hie">Hi, I'm</h3>
          <h1 id="user-detail-name">Gaurav Sharma</h1>
          <h2 className="animated">{text}</h2>
          <div className="buttons">
          <button className="buttonContact">Contact</button>
          <a href="https://drive.google.com/file/d/1w2f9GVQUNgWW3vf4-n3b9dD0U2pTLkSV/view?usp=drive_link" id="resume-link-1" target="_blank">
          <button className="buttonResume" id="resume-button-1"> Resume</button>
              </a>
          </div>
        </div>
      </div>
    </div>
  );
};
