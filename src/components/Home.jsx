import React from 'react'
import { useEffect,useState } from 'react';
import logo from "../Images/bg1.png";
import styles from "../styles/home.module.css"
import Link from "react-scroll"
import resume from "../Images/Gaurav-Sharma-Resume.pdf"

export const Home = () => {
    const handleresume = () =>{
      window.open('https://drive.google.com/file/d/1K_E_Che5KBduqgsZBifmblJuUoy90pmA/view?usp=sharing');
    }
  return (
    <div id='home' className={styles.homes}>
     <div className={styles.left}>
      <p>Hi, I'm</p>
      <h2  id="user-detail-name">Gaurav Sharma</h2>
      <img src='https://readme-typing-svg.demolab.com/?font=Fira+Code&size=42&duration=2000&pause=800&color=8E05C2&background=FFFFFF00&width=600&height=61&lines=Full+Stack+Web+Developer;Aspiring+MERN+Developer;Front+End+Developer' alt='animation' className='animation'/>
   <div>
<a href='#contact'>
<button className={styles.buttonContact}>
Contact
 </button>
</a>
<a href={resume} download="Gaurav-Sharma-Resume" id="resume-link-1" target="_blank">
<button  id="resume-button-2" className={styles.resumeButton} onClick={handleresume}> Resume</button>
    </a>
</div>
</div>
<div className='right'>
 <img src={logo} className={styles.backgroundImg}/>
</div>
     </div>
  )
}


