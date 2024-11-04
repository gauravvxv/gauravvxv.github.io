import React from 'react';
import styles from '../styles/contact.module.css';
import {SocialIcon} from "react-social-icons"
import { HyperText } from '../magicUI/HyperText'
import axios from "axios";
import { useEffect, useState} from 'react';
import 'aos/dist/aos.css'
import AOS from 'aos'


const Contact = () => {

  useEffect(()=>{
    AOS.init({
      duration:1200,
      easing:'ease-in-out',
      once: false
      })
  },[]);
  
  return (
    <div className={styles.main}>
  <div className="flex justify-center p-20" data-aos="fade-up">
      <HyperText
    className="text-6xl font-bold text-black dark:text-white"
    text="Contact"
    duration={1500}
  />
      </div>
    <div id='contact' className={styles.contacts}>
      {/* Left Section */}
      <div className={styles.leftSection} data-aos="fade-up">
        <div className={styles.xyz}>
          <p>Feel free to get in touch with me for inquiries or collaborations.</p>
        </div>

        <div className={styles.contactInfo}>
          <div id="contact-phone">9928425027</div>
          <div className={styles.contactInfo}>
            <a href="mailto:gauravxv0410@gmail.com" id="contact-email">
              gauravxv0410@gmail.com
            </a>
          </div>
        </div>

        <div className={styles.contactLinks}>
        <div className="transition-transform duration-300 ease-in-out hover:scale-110">
        <SocialIcon url="https://github.com/gauravvxv" />
      </div>
      <div className="transition-transform duration-300 ease-in-out hover:scale-110">
        <SocialIcon url="https://www.linkedin.com/in/gaurav-sharma-827830247/" />
      </div>
      <div className="transition-transform duration-300 ease-in-out hover:scale-110">
        <SocialIcon url="https://x.com/Gauravxvv" />
      </div>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className={styles.rightSection} data-aos="fade-up">
    
           <form >
           <input type="text" id="fullname" name="fullname" placeholder='Full Name'  />
           <br />
           <br />
           <input type="number" name="number" id="number" placeholder='Number' />
           <br />
           <br />
           <input type="email" id="email" name="email" placeholder='Email'/>
           <br />
           <br />
           <textarea id="message" name="message"  placeholder='Enter your message here...'></textarea>
           <br />
           <br />
          <button type='submit' className={styles.submitButton}>Submit</button>
         </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;

