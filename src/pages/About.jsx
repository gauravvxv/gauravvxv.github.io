import React, { useEffect } from 'react'
import logo from "../Images/formal.png"
import { HyperText } from '../magicUI/HyperText'
import {SocialIcon} from "react-social-icons"
import 'aos/dist/aos.css'
import AOS from 'aos'


export const About = () => {

  useEffect(()=>{
    AOS.init({
      duration: 1200,
      easing:'ease-in-out',
      once: false
    })
    console.log('AOS initialized');
  },[]);

  return (
    <div id='about' className='bg-black md:h-screen'>
      {/* top one */}
      <div className="flex justify-center p-20" data-aos="fade-up">
      <HyperText
    className="text-6xl font-bold text-black dark:text-white"
    text="About me"
    duration={1500}
  />
      </div>



      {/* end */}
      <div className="md:flex justify-between md:w-[85%] w-[100%] p-10" data-aos="fade-up">
  <div id="image" className="md:order-2 order-1 flex justify-center">
    <div className="md:w-[300px] w-[200px]">
      <img src={logo} alt="image" />
    </div>
  </div>

  <div id="summary" className="md:order-1 order-2" data-aos="fade-up">
    <div id="data" className="md:pt-44 pt-[-400px] p-10">
      <p className="text-2xl md:text-4xl text-gray-700 dark:text-gray-300 max-w-[400px] md:max-w-5xl leading-relaxed text-justify">
        An enthusiastic Full Stack Developer with a robust skill set in JavaScript, React, Node.js, Express, MongoDB, and Next.js. 
        I am dedicated to creating dynamic and interactive web applications using the MERN stack, 
        combining technical expertise with strong problem-solving and communication skills to deliver
        exceptional user experiences. Known for writing clean, efficient, and scalable code, I have experience
        building responsive and optimized applications with a focus on usability, accessibility, and performance. 
        Passionate about continuous learning and staying updated with industry trends, I am committed to bringing creativity
        and innovation to every project.
      </p>
    </div>

    <div id="logo" className="flex justify-center space-x-9">
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
</div>
    </div>
  )
}

