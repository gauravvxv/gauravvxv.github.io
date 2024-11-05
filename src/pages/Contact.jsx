import React from 'react';
import styles from '../styles/contact.module.css';
import {SocialIcon} from "react-social-icons"
import { HyperText } from '../magicUI/HyperText'
import axios from "axios";
import { useEffect, useState} from 'react';
import 'aos/dist/aos.css'
import AOS from 'aos'
import { useTheme } from '../theme/themeContext';
import toast from 'react-hot-toast';

const Contact = () => {
  const [form , setForm] = useState({
    fullName: '',
    number: '',
    email: '',
    message: ''
  })

  
  const {darkMode} = useTheme();

  const handleChange =(e)=>{
    const {name , value} = e.target;
    setForm((prev) =>({
      ...prev,
      [name]: value
    }))
  }
  
  const handleFormData = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`https://portfolio-backend-6jsl.onrender.com/api/message` , form);
      console.log(res);
      
      setForm({
        fullName: '',
        number: '',
        email: '',
        message: ''
      });
      
      toast.success(`Thankyou! ${res.data.data.fullName} I'll connect with you as soon as possible.`);
    } catch (error) {
      console.log(error.response.data.error);
      toast.error(error.response.data.error);
    }




  }
// https://portfolio-backend-6jsl.onrender.com/api/message

  useEffect(()=>{
    AOS.init({
      duration:1200,
      easing:'ease-in-out',
      once: false
      })
  },[]);
  
  return (
    <div className={`${styles.main} ${darkMode ? 'bg-white': 'bg-[#12021c]'}`}>
  <div className="flex justify-center p-20" data-aos="fade-up">
      <HyperText
          className={`font-display text-6xl md:text-7xl md:p-3 font-semibold ${darkMode ? 'text-black' : 'text-white'}`}
    text="Contact"
    duration={1500}
  />
      </div>
    <div id='contact' className={styles.contacts}>
      {/* Left Section */}
      <div className={styles.leftSection} data-aos="fade-up">
        <div className={`${styles.xyz} ${darkMode ? 'text-black' : 'text-white'}`}>
          <p>Feel free to get in touch with me for inquiries or collaborations.</p>
        </div>

        <div className={`${styles.contactInfo} ${darkMode ? 'text-black' : 'text-white'}`}>
          <div id="contact-phone" >9928425027</div>
          <div className={styles.contactInfo}>
            <a href="mailto:gauravxv0410@gmail.com" id="contact-email">
              gauravxv0410@gmail.com
            </a>
          </div>
        </div>

        <div className='flex justify-center items-center gap-4 pt-8'>
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
    
           <form onSubmit={handleFormData}>
           <input type="text" id="fullname" name="fullName" value={form.fullName} onChange={handleChange} placeholder='Full Name' className={`${darkMode ? 'bg-white' : 'bg-black'}`}  />
           <br />
           <br />
           <input type="number" name="number" id="number"  value={form.number} onChange={handleChange} placeholder='Number' className={`${darkMode ? 'bg-white' : 'bg-black'}`}/>
           <br />
           <br />
           <input type="email" id="email" name="email" placeholder='Email'  value={form.email} onChange={handleChange} className={`${darkMode ? 'bg-white' : 'bg-black'}`}/>
           <br />
           <br />
           <textarea id="message" name="message"  value={form.message} onChange={handleChange} placeholder='Enter your message here...' className={`${darkMode ? 'bg-white' : 'bg-black'}`}></textarea>
           <br />
           <br />
          <button type='submit' className={`${styles.submitButton} ${darkMode ? 'text-black': 'text-white'} ${darkMode ? 'bg-white': 'bg-black'}`}>Submit</button>
         </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;

