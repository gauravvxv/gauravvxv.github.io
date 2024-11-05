  import React, { useEffect } from 'react'
  import logo from "../Images/bg1.png";
  import styles from "../styles/home.module.css"
  import Link from "react-scroll"
  import resume from "../Images/Gaurav-Sharma-Resume.pdf"
  import Icons from '../components/Icons';
  import { TypingAnimation } from '../magicUI/Typing';
  import { FadeText } from '../magicUI/Fade';
  import 'aos/dist/aos.css'
  import AOS from 'aos'
  import { useTheme } from '../theme/themeContext';


  export const Home = () => {

    const {darkMode} = useTheme();

      const handleresume = () =>{
        window.open('https://drive.google.com/file/d/1K_E_Che5KBduqgsZBifmblJuUoy90pmA/view?usp=sharing');
      }
      const texts = [
        "Full Stack Developer",
        "MERN Developer",
        "FrontEnd Developer",
        "BackEnd Developer"
      ];

      useEffect(()=>{

        AOS.init({
          duration:1200,
          easing:'ease-in-out',
          once: false
        })

      },[])
      
    return (
      <div id='home' className={`${styles.homes} ${darkMode ? 'bg-white' : 'bg-[#12021c]'}`}>
      <div className={styles.left} data-aos="fade-right">
      <FadeText
          text="Hi, I'm"
          className={`font-display text-6xl md:text-7xl md:p-3 font-semibold ${darkMode ? 'text-black' : 'text-white'}`}
          direction="left"
        />
        <br />
        <FadeText
          text="Gaurav Sharma"
          className={`font-display text-6xl md:text-8xl font-bold leading-[10rem] tracking-[-0.02em] drop-shadow-sm mt-4 ${darkMode ? 'text-black' : 'text-white'}`}
          direction="left"
        />

        <FadeText
          text={<TypingAnimation texts={texts} duration={100} className="custom-class" />}
          className="font-display"
          direction="left"
        />

    <div className='flex justify-between items-center'>

    <FadeText
            text={
              <a href='#contact'>
          <button className={`${styles.resumeButton} ${darkMode ? 'bg-white' : 'bg-black'} ${darkMode ? 'text-black' : 'text-white'}`}>
            Contact
          </button>
              </a>
            }
            direction="left"
          />

          <FadeText
            text={
              <a href={resume} download="Gaurav-Sharma-Resume" id="resume-link-1" target="_blank">
                <button id="resume-button-2" className={`${styles.resumeButton} ${darkMode ? 'bg-white' : 'bg-black'} ${darkMode ? 'text-black' : 'text-white'}`} onClick={handleresume}> Resume</button>
              </a>
            }
            direction="up"
          />

  </div>
  </div>


  <div className={styles.right} data-aos="fade-left">
  <Icons/>
  </div>
      </div>
    )
  }


