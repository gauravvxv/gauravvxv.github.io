import React, { useEffect } from "react";
import styles from  "../styles/project.module.css"
import boat from "../Images/boat.png.png";
import html from "../Images/html.png.png";
import css from "../Images/css.png.png";
import js from "../Images/js.png.png";
import glossier from "../Images/glossier.pgn.png";
import chatmate from "../Images/chatMate.png"
import travel from "../Images/travel.png.png";
import react from "../Images/react.png.png";
import redux from "../Images/redux.png.png";
import tindog from "../Images/tindog.png.png"
import boot from "../Images/boot.png.png"
import GitHubCalendar from 'react-github-calendar';
import mongodb from "../Images/mongodb.png.png"
import node from "../Images/node.png.png"
import tailwind from "../Images/tailwind.png"
import express from "../Images/express.png.png"
import socket from "../Images/socket.png"
import firebase from "../Images/firebase.png"
import neton from "../Images/neton.png"
import { HyperText } from "../magicUI/HyperText";
import 'aos/dist/aos.css'
import AOS from 'aos'


const Project = () => {

  useEffect(()=>{
    AOS.init({
      duration:1200,
      easing:"ease-in-out",
      once:false
    })
  })

  return (
    <div id="projects" className={styles.allProjects}>

     <div className="flex justify-center p-20" data-aos="fade-up">
      <HyperText
    className="text-6xl font-bold text-black dark:text-white"
    text="Projects"
    duration={1500}
  />
      </div>

      <div  className="container">
        <div className="project-card" id={styles.projectCard}  data-aos="fade-up">
          <div>
            <img src={tindog} className={styles.projectImg} />
          </div>
          <div className={styles.details}>
            <h2 className="project-title">TINDOG</h2>
            <p className="project-description">
              Discover the pawfect playdate or even puppy love on our HTML, CSS, and Bootstrap-designed website, connecting dogs for tail-wagging fun.
            </p>
            <h1 className="techstacks">Techstacks:</h1>
            <div className="project-tech-stack" id={styles.stacks}>
              <img src={html} />
              <img src={css} />
              <img src={boot} />
            </div>
            <a href="https://65255e57a08841387bd3cddb--flourishing-palmier-de8466.netlify.app/">
              <button className="project-github-link">Preview</button>
            </a>
            <a href="https://github.com/gauravvxv/Tinder-for-dogs">
              <button className="project-deployed-link">Source Code</button>
            </a>
          </div>
        </div>

        <div className="project-card" id={styles.projectCard} data-aos="fade-up">
          <div  >
            <img src={boat} className={styles.projectImg}  />
          </div>
          <div className={styles.details}>
            <h2 className="project-title">BOAT</h2>
            <p className="project-description">
              Discover essential boat electronics on our website! Browse and buy
              user-friendly navigation gear and communication equipment for
              smooth sailing.
            </p>
            <h1 className="techstacks">Techstacks:</h1>
            <div className="project-tech-stack" id={styles.stacks}>
              <img src={html} />
              <img src={css} />
              <img src={js} />
            </div>
            <a href="https://storied-chimera-2168ba.netlify.app/">
              <button className="project-github-link" id={styles.githubLink}>Preview</button>
            </a>
            <a href="https://github.com/vivekverma4669/boat_project_group_7">
              <button className="project-deployed-link">Source Code</button>
            </a>
          </div>
        </div>
        <div className="project-card" id={styles.projectCard} data-aos="fade-up">
          <div>
            <img src={glossier} className={styles.projectImg}   />
          </div>
          <div className={styles.details}>
            <h2 className="project-title">GLOSSIER</h2>
            <p className="project-description">
              Your go-to destination for women's beauty essentials. Explore
              skincare, makeup, haircare, and wellness products to enhance your
              natural beauty.
            </p>
            <h1 className="techstacks">Techstacks:</h1>
            <div className="project-tech-stack" id={styles.stacks}>
              <img src={html} />
              <img src={css} />
              <img src={js} />
            </div>
            <a href="https://celebrated-cendol-85db1c.netlify.app/">
              <button className="project-github-link" id={styles.githubLink}>Preview</button>
            </a>
            <a href="https://github.com/arjundangi01/Glossier-clone">
              <button className="project-deployed-link">Source Code</button>
            </a>
          </div>
        </div>


        <div className="project-card" id={styles.projectCard} data-aos="fade-up">
          <div>
            <img src={neton} className={styles.projectImg}/>
          </div>
          <div className={styles.details}>
            <h2 className="project-title">NETON</h2>
            <p className="project-description">
            Neton is a movie discovery website where users can search for movies, view their release dates, posters, and other details. 
            </p>
            <h1 className="techstacks">Techstacks:</h1>
            <div className="project-tech-stack" id={styles.stacks}>
              <img src={react} />
              <img src={redux} />
              <img src={firebase} />
            </div>
            <a href="https://netzon.vercel.app/movies">
              <button className="project-github-link" id={styles.githubLink}>Preview</button>
            </a>
            <a href="https://github.com/gauravvxv/Netzon">
              <button className="project-deployed-link">Source Code</button>
            </a>
          </div>
        </div>


        <div className="project-card" id={styles.projectCard} data-aos="fade-up">
          <div>
            <img src={travel} className={styles.projectImg}  />
          </div>
          <div className={styles.details}>
            <h2 className="project-title">VOYAWANDER</h2>
            <p className="project-description">
              VOYAWANDER: Your passport to adventure! Book hotels and more on
              our travel website and embark on unforgettable journeys.
            </p>
            <h1 className="techstacks">Techstacks:</h1>
            <div className="project-tech-stack" id={styles.stacks}>
              <img src={react} />
              <img src={redux} />
              <img src={node} />
              <img src={express} />
              <img src={mongodb} />
            </div>
            <a href="https://voyawander-cw.netlify.app/">
              <button className="project-github-link" id={styles.githubLink}>Preview</button>
            </a>
            <a href="https://github.com/monurajputrko/Voyawander">
              <button className="project-deployed-link">Source Code</button>
            </a>
          </div>
        </div>

        <div className="project-card" id={styles.projectCard} data-aos="fade-up">
          <div>
            <img src={chatmate} className={styles.projectImg} />
          </div>
          <div className={styles.details}>
            <h2 className="project-title">CHATMATE</h2>
            <p className="project-description">
            ChatMate is a real-time chat application that allows users to connect and communicate instantly. Users can create an account, log in, and start chatting with other users in real-time.
            </p>
            <h1 className="techstacks">Techstacks:</h1>
            <div className="project-tech-stack" id={styles.stacks}>
              <img src={mongodb} />
              <img src={express} />
              <img src={react} />
              <img src={node} />
              <img src={socket} />
              <img src={tailwind} />
            </div>
            <a href="https://chatmate-dusky.vercel.app/">
              <button className="project-github-link">Preview</button>
            </a>
            <a href="https://github.com/gauravvxv/ChatMate">
              <button className="project-deployed-link">Source Code</button>
            </a>
          </div>
        </div>
      </div>


      <div className="flex justify-center p-20" data-aos="fade-up">
      <HyperText
    className="text-6xl font-bold text-black dark:text-white"
    text="Github Stats"
    duration={1500}
  />
      </div>

      <div className={styles.github}>

        <div data-aos="fade-up">
          <a href="https://git.io/streak-stats">
            <img src="https://github-readme-streak-stats.herokuapp.com?user=gauravvxv&theme=dark" alt="GitHub Streak" id="github-streak-stats" className="w[500px]"  />
            </a>
        </div>

        <div data-aos="fade-up">
          <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=gauravvxv&layout=compact&theme=dark" className="w-[500px]" id="github-top-langs" />
        </div>

        <div className={styles.wrapper} data-aos="fade-up">
        <div>
          <GitHubCalendar username="gauravvxv" className="w-[500px]" />
        </div>
        </div>

        <div data-aos="fade-up">
        <p>
          <img src="https://github-readme-stats.vercel.app/api?username=gauravvxv&show_icons=true&locale=en&theme=dark" className="w-[500px]" alt="GitHub Stats" id="github-stats-card" />
        </p>
        </div>

      </div>

    </div>
  );
};

export default Project;
