import React from 'react';
import '../styles/contact.css'; 
import git from "../Images/github.png.png"
import linkedin from "../Images/linkedin.png.png"
import insta from "../Images/insta.png.png"
import email from "../Images/mail.png (2).png"
const Contact = () => {
  return (
    <div id='contact'>
        <div className='abt'>
       <h1>Contact me</h1>
        </div>
        <div className='xyz'>
        <p>Feel free to get in touch with me for inquiries or collaborations.</p>
        </div>
        
        <div className="contact-links">
          <div className="contact-item">
            <a href="https://github.com/gauravvxv"  id="contact-github">
              <img src={git} className='img'/>
            </a>
          </div>
          <div className="contact-item">
            <a href="https://www.linkedin.com/in/gaurav-sharma-827830247/"  id="contact-linkedin">
             <img src={linkedin} className='img'/>
            </a>
          </div>
          <div className="contact-item">
            <a href="https://www.instagram.com/gauravvxv" target="_blank" rel="noopener noreferrer">
            <img src={insta} className='img'/>
            </a>
          </div>
          <div className="contact-item">
            <a href="mailto:gauravxv0410@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={email} className='img'/>
            </a>
          </div>
          <div className='contact-info'>
          <div className="contact-item" id="contact-phone">
             9928425027
          </div>
          <div className="contact-item">
            <a href="mailto:gauravxv0410@gmail.com" id="contact-email">
               gauravxv0410@gmail.com
            </a>
          </div>
          </div>
          </div>
    </div>
  )
};

export default Contact;
