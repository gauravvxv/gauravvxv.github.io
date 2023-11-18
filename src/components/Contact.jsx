import React from 'react';
import styles from '../styles/contact.module.css' 
import git from "../Images/github.png.png"
import linkedin from "../Images/linkedin.png.png"
import insta from "../Images/insta.png.png"
import email from "../Images/mail.png (2).png"


const Contact = () => {
  return (
    <div id='contact' className={styles.contacts}>
        <div className={styles.abt}>
       <h1>Contact me</h1>
        </div>
        <div className={styles.xyz}>
        <p>Feel free to get in touch with me for inquiries or collaborations.</p>
        </div>
        
        <div className={styles.contactLinks}>
          <div className={styles.contactItem}>
            <a href="https://github.com/gauravvxv"  id="contact-github">
              <img src={git} className={styles.img}/>
            </a>
          </div>
          <div className={styles.contactItem}>
            <a href="https://www.linkedin.com/in/gaurav-sharma-827830247/"  id="contact-linkedin">
             <img src={linkedin} className={styles.img}  />
            </a>
          </div>
          <div className={styles.contactItem}>
            <a href="https://www.instagram.com/gauravvxv" target="_blank" rel="noopener noreferrer">
            <img src={insta} className={styles.img} />
            </a>
          </div>
          <div className={styles.contactItem}  >
            <a href="mailto:gauravxv0410@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={email} className={styles.img} />
            </a>
          </div>
          </div>
          <div className={styles.contactInfo}>
          <div  id="contact-phone">
             9928425027
          </div>
          <div className={styles.contactInfo}>
            <a href="mailto:gauravxv0410@gmail.com" id="contact-email">
               gauravxv0410@gmail.com
            </a>
          </div>
          </div>
    </div>
  )
};

export default Contact;
