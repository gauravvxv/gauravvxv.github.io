import React from 'react';
import styles from '../styles/contact.module.css';
import git from "../Images/github.png.png";
import linkedin from "../Images/linkedin.png.png";
import email from "../Images/mail.png (2).png";
import axios from "axios";
import { useEffect, useState} from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    number: '',
    email: '',
    message: '',
  });

  const handleChange = (e)=>{
setFormData({...formData,[e.target.name]: e.target.value})
  }

  const postingData = async(e)=>{
e.preventDefault();
    try {
      const api = await axios.post(`https://portfolio-backend-gaurav-0410.up.railway.app/data`,formData)
      console.log(api.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.main}>
 <div className={styles.abt}>
          <h1>Contact me</h1>
        </div>
    <div id='contact' className={styles.contacts}>
      {/* Left Section */}
      <div className={styles.leftSection}>
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
          <div className={styles.contactItem}>
            <a href="https://github.com/gauravvxv" id="contact-github">
              <img src={git} className={styles.img} alt="GitHub" />
            </a>
          </div>
          <div className={styles.contactItem}>
            <a href="https://www.linkedin.com/in/gaurav-sharma-827830247/" id="contact-linkedin">
              <img src={linkedin} className={styles.img} alt="LinkedIn" />
            </a>
          </div>
          <div className={styles.contactItem}>
            <a href="mailto:gauravxv0410@gmail.com" target="_blank" rel="noopener noreferrer">
              <img src={email} className={styles.img} alt="Email" />
            </a>
          </div>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className={styles.rightSection}>
        <form onSubmit={postingData}>
          <input type="text" id="fullname" name="fullname" value={formData.fullname} placeholder='Full Name' onChange={handleChange} />
          <br />
          <br />
          <input type="number" name="number" id="number" value={formData.number} placeholder='Number'onChange={handleChange} />
          <br />
          <br />
          <input type="email" id="email" name="email" value={formData.email} placeholder='Email' onChange={handleChange} />
          <br />
          <br />
          <textarea id="message" name="message" value={formData.message} placeholder='Enter your message here...' onChange={handleChange}></textarea>
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

