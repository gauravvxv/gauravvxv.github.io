import React from 'react'
import { useEffect,useState } from 'react';
import logo from "../Images/image1.png.png";
import "../styles/home.css"
import resume from "../Images/resume.pdf"
export const Home = () => {
    const [text, setText] = useState("");
    const texts = [
      "A Full Stack Web Developer",
      "A MERN Developer",
      "A Front-end Developer",
    ]; 
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
    const handleresume = () =>{
      window.open('https://drive.google.com/file/d/1w2f9GVQUNgWW3vf4-n3b9dD0U2pTLkSV/view?usp=sharing');
    }
      
  return (
    <div id='home'>
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
          <a href={resume} download="Gaurav Sharma-Full Stack Web Developer (1).pdf" id="resume-link-1" target="_blank">
          <button className="buttonResume" id="resume-button-1" onClick={handleresume}> Resume</button>
              </a>
          </div>
        </div>
      </div>
    </div>
  )
}
