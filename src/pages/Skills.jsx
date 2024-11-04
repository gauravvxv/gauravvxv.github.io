import React, { useEffect } from 'react'
import html from "../Images/html.png.png"
import css from "../Images/css.png.png"
import js from "../Images/js.png.png"
import react from "../Images/react.png.png"
import redux from "../Images/redux.png.png"
import node from "../Images/node.png.png"
import express from "../Images/express.png.png"
import mongo from "../Images/mongodb.png.png"
import tailwind from "../Images/tailwind.png"
import typeScript from "../Images/typescript.png"
import socket from "../Images/socket.png"
import firebase from "../Images/firebase.png"
import java from "../Images/java.webp"
import next from "../Images/next.png"
import github from "../Images/github2.png"
import git from "../Images/git1.png"
import vscode from "../Images/vscode.png"
import versel from "../Images/versel.png"
import cyclic from "../Images/cyclic.jpg"
import netlify from "../Images/netlify.png"
import postman from "../Images/postman.png.png"
import thunder from "../Images/thunder.png"
import render from "../Images/render.jpg"
import "../styles/skill.css"
import { HyperText } from '../magicUI/HyperText'
import 'aos/dist/aos.css'
import AOS from 'aos'

export const Skills = () => {

  useEffect(()=>{
    AOS.init({
      duration: 1200,
      easing:'ease-in-out',
      once: false
    })
  },[])
  return (
    <div  id="skills" className="bg-custom-dark">
     <div className="flex justify-center p-20" data-aos='fade-up'>
      <HyperText
    className="text-6xl font-bold text-black dark:text-white"
    text="Skills"
    duration={1500}
  />
      </div>

      <div className="p-20">
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-28 md:p-28">
    <div className="skills-card flex flex-col items-center p-4 rounded-lg" data-aos='zoom-in-up'>
      <img src={html} className="w-44 h-40 mb-4"/>
      <p className="skills-card-name text-4xl font-semibold ">
        HTML
      </p>
    </div>

    <div className="skills-card flex flex-col items-center p-4 rounded-lg " data-aos='zoom-in-up'>
      <img src={css} className="w-44 h-40 mb-4"/>
      <p className="skills-card-name text-4xl font-semibold ">
        CSS
      </p>
    </div>

    <div className="skills-card flex flex-col items-center p-4 rounded-lg " data-aos='zoom-in-up'>
      <img src={tailwind} className="w-60 h-40 mb-4"/>
      <p className="skills-card-name text-4xl font-semibold">
        Tailwind CSS
      </p>
    </div>

    <div className="skills-card flex flex-col items-center p-4 rounded-lg " data-aos='zoom-in-up'>
      <img src={js} className="w-44 h-40 mb-4"/>
      <p className="skills-card-name text-4xl font-semibold">
        JavaScript
      </p>
    </div>

    <div className="skills-card flex flex-col items-center p-4 rounded-lg " data-aos='zoom-in-up'>
      <img src={typeScript} className="w-44 h-40 mb-4"/>
      <p className="skills-card-name text-4xl font-semibold">
        TypeScript
      </p>
    </div>

    <div className="skills-card flex flex-col items-center p-4 rounded-lg " data-aos='zoom-in-up'>
      <img src={java} className="w-44 h-40 mb-4"/>
      <p className="skills-card-name text-4xl font-semibold">
        Java
      </p>
    </div>

    <div className="skills-card flex flex-col items-center p-4 rounded-lg " data-aos='zoom-in-up'>
      <img src={react} className="w-44 h-40 mb-4"/>
      <p className="skills-card-name text-4xl font-semibold">
        React
      </p>
    </div>

    <div className="skills-card flex flex-col items-center p-4 rounded-lg " data-aos='zoom-in-up'>
      <img src={redux} className="w-44 h-40 mb-4"/>
      <p className="skills-card-name text-4xl font-semibold">
        Redux
      </p>
    </div>

    <div className="skills-card flex flex-col items-center p-4 rounded-lg " data-aos='zoom-in-up'>
      <img src={node} className="w-44 h-40 mb-4"/>
      <p className="skills-card-name text-4xl font-semibold">
        Node
      </p>
    </div>

    <div className="skills-card flex flex-col items-center p-4 rounded-lg " data-aos='zoom-in-up'>
      <img src={express} className="w-44 h-40 mb-4"/>
      <p className="skills-card-name text-4xl font-semibold">
        Express
      </p>
    </div>

    <div className="skills-card flex flex-col items-center p-4 rounded-lg " data-aos='zoom-in-up'>
      <img src={mongo} className="w-44 h-40 mb-4"/>
      <p className="skills-card-name text-4xl font-semibold">
        MongoDB
      </p>
    </div>

    <div className="skills-card flex flex-col items-center p-4 rounded-lg " data-aos='zoom-in-up'>
      <img src={next} className="w-44 h-40 mb-4"/>
      <p className="skills-card-name text-4xl font-semibold ">
        Next
      </p>
    </div>

    <div className="skills-card flex flex-col items-center p-4 rounded-lg relative" data-aos='zoom-in-up'>
      <img src={socket} className="w-64 h-40 mb-4"/>
      <p className="skills-card-name text-4xl font-semibold">
        Socket.io
      </p>
    </div>
  </div>
</div>


<div className="flex justify-center p-20" data-aos='fade-up'>
      <HyperText
    className="text-6xl font-bold text-black dark:text-white"
    text="Tools"
    duration={1500}
  />
      </div>

      <div className='p-20'>


     <div  className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-28 md:p-28 ">
     <div className="skills-card flex flex-col items-center p-4 rounded-lg" data-aos='zoom-in-up'>
 <img src={github}  className="w-44 h-40 mb-4"/>
 <p className="skills-card-name text-4xl font-semibold" >Github</p>
     </div>


     <div  className="skills-card flex flex-col items-center p-4 rounded-lg" data-aos='zoom-in-up'>
 <img src={git} className="w-44 h-40 mb-4"/>
 <p className="skills-card-name text-4xl font-semibold">Git</p>
     </div>

     <div className='skills-card flex flex-col items-center p-4 rounded-lg' data-aos='zoom-in-up'>
 <img src={vscode} className='w-44  h-40 mb-4' />
 <p  className="skills-card-name text-4xl font-semibold">Vscode</p>
     </div>

     <div className='skills-card flex flex-col items-center p-4 rounded-lg' data-aos='zoom-in-up'>
 <img src={netlify} className='w-44  h-40 mb-4' />
 <p  className="skills-card-name text-4xl font-semibold">Netlify</p>
     </div>

     <div className='skills-card flex flex-col items-center p-4 rounded-lg' data-aos='zoom-in-up'>
 <img src={versel} className='w-44  h-40 mb-4' />
 <p  className="skills-card-name text-4xl font-semibold">Vercel</p>
     </div>

     <div className='skills-card flex flex-col items-center p-4 rounded-lg' data-aos='zoom-in-up'>
 <img src={cyclic} className='w-44  h-40 mb-4' />
 <p  className="skills-card-name text-4xl font-semibold" >Cyclic</p>
     </div>

     <div className='skills-card flex flex-col items-center p-4 rounded-lg' data-aos='zoom-in-up'>
 <img src={postman} className='w-44  h-40 mb-4' />
 <p  className="skills-card-name text-4xl font-semibold" >Postman</p>
     </div>

     <div className='skills-card flex flex-col items-center p-4 rounded-lg' data-aos='zoom-in-up'>
 <img src={thunder} className='w-44  h-40 mb-4' />
 <p  className="skills-card-name text-4xl font-semibold" >Thunder</p>
     </div>

     <div className='skills-card flex flex-col items-center p-4 rounded-lg' data-aos='zoom-in-up'>
 <img src={render} className='w-44  h-40 mb-4' />
 <p  className="skills-card-name text-4xl font-semibold" >Render</p>
     </div>

     <div className='skills-card flex flex-col items-center p-4 rounded-lg' data-aos='zoom-in-up'>
 <img src={firebase} className='w-44  h-40 mb-4' />
 <p  className="skills-card-name text-4xl font-semibold" >Firebase</p>
     </div>

     </div>
    </div>
      </div>
  )
}
