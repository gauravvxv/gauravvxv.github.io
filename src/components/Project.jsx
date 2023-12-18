import React from "react";
import styles from  "../styles/project.module.css"
import boat from "../Images/boat.png.png";
import html from "../Images/html.png.png";
import css from "../Images/css.png.png";
import js from "../Images/js.png.png";
import glossier from "../Images/glossier.pgn.png";
import travel from "../Images/travel.png.png";
import react from "../Images/react.png.png";
import redux from "../Images/redux.png.png";
import tindog from "../Images/tindog.png.png"
import boot from "../Images/boot.png.png"
import GitHubCalendar from 'react-github-calendar';
import mongodb from "../Images/mongodb.png.png"
import node from "../Images/node.png.png"
import express from "../Images/express.png.png"
const Project = () => {
  return (
    <div id="projects" className={styles.allProjects}>
      <div className="project-container">
        <h1 className={styles.pro}>Projects</h1>
      </div>

      <div  className="container">

        <div className="project-card" id={styles.projectCard} >
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

        <div className="project-card" id={styles.projectCard}>
          <div>
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
        <div className="project-card" id={styles.projectCard}>
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
        <div className="project-card" id={styles.projectCard}>
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
      </div>
      <div className={styles.github}>
      <h1 className={styles.stats}>Github stats</h1>
        <div  >
          {/* <img src="https://github-readme-streak-stats.herokuapp.com?user=gauravvxv&theme=dark" alt="GitHub Streak"  /> */}
          <a href="https://git.io/streak-stats">
            <img src="https://github-readme-streak-stats.herokuapp.com?user=gauravvxv&theme=dark" alt="GitHub Streak" id="github-streak-stats" className={styles.githubStreak}  />
            </a>
        </div>
        <div >
          <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=gauravvxv&layout=compact&theme=dark" className={styles.streakStats} id="github-top-langs" />
        </div>
        <div className={styles.wrapper}>
        <div className={styles.calendar}>
          {/* <img src="https://ghchart.rshah.org/gauravvxv" className={styles.calendar} /> */}
          <GitHubCalendar username="gauravvxv" className="react-activity-calendar" />
        </div>
        </div>
        
        <p className={styles.statsCard}>
          <img src="https://github-readme-stats.vercel.app/api?username=gauravvxv&show_icons=true&locale=en&theme=dark" alt="GitHub Stats" id="github-stats-card" />
        </p>
      </div>
    </div>

  );
};

export default Project;
