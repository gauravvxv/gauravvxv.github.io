import React from 'react'
import styles from "../styles/skill.module.css"
import html from "../Images/html.png.png"
import css from "../Images/css.png.png"
import js from "../Images/js.png.png"
import react from "../Images/react.png.png"
import redux from "../Images/redux.png.png"
import node from "../Images/node.png.png"
import express from "../Images/express.png.png"
import mongo from "../Images/mongodb.png.png"
import github from "../Images/github2.png"
import git from "../Images/git1.png"
import vscode from "../Images/vscode.png"
import versel from "../Images/versel.png"
import cyclic from "../Images/cyclic.jpg"
import netlify from "../Images/netlify.png"


export const Skills = () => {
  return (
    <div  id="skills" className={styles.allSkills}>
     <div className='skill-container'>
      <h1 className={styles.skill}>Skills</h1>
     </div>

     <div className={styles.container}>
     <div className={styles.grid}>
    <div className='skills-card' id={styles.skillCard}>
      <img src={html} className="skills-card-img"/>
      <p className="skills-card-name">HTML</p>
    </div>
    <div className='skills-card' id={styles.skillCard}>
      <img src={css} className="skills-card-img"/>
      <p className="skills-card-name">CSS</p>
    </div>
    <div className='skills-card' id={styles.skillCard}>
      <img src={js} className="skills-card-img"/>
      <p className="skills-card-name">Javascript</p>
    </div>
    <div className='skills-card'id={styles.skillCard}>
      <img src={react} className="skills-card-img"/>
      <p className="skills-card-name">React</p>
    </div>
    <div className='skills-card' id={styles.skillCard}>
      <img src={redux} className="skills-card-img"/>
      <p className="skills-card-name">Redux</p>
    </div>
    <div className='skills-card' id={styles.skillCard}>
      <img src={node} className="skills-card-img"/>
      <p className="skills-card-name">Node</p>
    </div>
    <div className='skills-card'id={styles.skillCard}>
      <img src={express} className="skills-card-img"/>
      <p className="skills-card-name">Express</p>
    </div>
    <div className='skills-card'id={styles.skillCard}>
      <img src={mongo} className="skills-card-img"/>
      <p className="skills-card-name">Mongodb</p>
    </div>
     </div>
     </div>
     <div className={styles.animations}>
     <h1 className={styles.tools}>Tools</h1>
     </div>
     <div className={styles.containerTools}>
     <div className={styles.toolImage}>
 <img src={github} className={styles.images1}/>
 <h1 className={styles.toolName}>Github</h1>
     </div>
     <div className={styles.toolImage}>
 <img src={git} className={styles.images1}/>
 <h1 className={styles.toolName}>Git</h1>
     </div>
     <div className={styles.toolImage}>
 <img src={vscode} className={styles.images1}/>
 <h1 className={styles.toolName}>Vscode</h1>
     </div>
     <div className={styles.toolImage}>
 <img src={netlify} className={styles.images1}/>
 <h1 className={styles.toolName}>Netlify</h1>
     </div>
     <div className={styles.toolImage}>
 <img src={versel} className={styles.images1}/>
 <h1 className={styles.toolName}>Vercel</h1>
     </div>
     <div className={styles.toolImage}>
 <img src={cyclic} className={styles.images1}/>
 <h1 className={styles.toolName}>Cyclic</h1>
     </div>
     </div>
    </div>
  )
}
