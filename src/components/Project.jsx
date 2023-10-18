import React from "react";
import "../styles/project.css";
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
const Project = () => {
  return (
    <div id="projects">
      <div className="project-container">
        <h1 className="pro">Projects</h1>
      </div>

      <div className="project-card">

        <div className="container-grid">
          <div>
            <img src={tindog} className="project-img" />
          </div>
          <div className="details">
            <h2 className="project-title">TINDOG</h2>
            <p className="project-description">
              Discover the pawfect playdate or even puppy love on our HTML, CSS, and Bootstrap-designed website, connecting dogs for tail-wagging fun.
            </p>
            <h1 className="techstacks">Techstacks:</h1>
            <div className="project-tech-stack">
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

        <div className="container-grid">
          <div>
            <img src={boat} className="project-img" />
          </div>
          <div className="details">
            <h2 className="project-title">BOAT</h2>
            <p className="project-description">
              Discover essential boat electronics on our website! Browse and buy
              user-friendly navigation gear and communication equipment for
              smooth sailing.
            </p>
            <h1 className="techstacks">Techstacks:</h1>
            <div className="project-tech-stack">
              <img src={html} />
              <img src={css} />
              <img src={js} />
            </div>
            <a href="https://storied-chimera-2168ba.netlify.app/">
              <button className="project-github-link">Preview</button>
            </a>
            <a href="https://github.com/vivekverma4669/boat_project_group_7">
              <button className="project-deployed-link">Source Code</button>
            </a>
          </div>
        </div>
        <div className="container-grid">
          <div>
            <img src={glossier} className="project-img" />
          </div>
          <div className="details">
            <h2 className="project-title">GLOSSIER</h2>
            <p className="project-description">
              Your go-to destination for women's beauty essentials. Explore
              skincare, makeup, haircare, and wellness products to enhance your
              natural beauty.
            </p>
            <h1 className="techstacks">Techstacks:</h1>
            <div className="project-tech-stack">
              <img src={html} />
              <img src={css} />
              <img src={js} />
            </div>
            <a href="https://celebrated-cendol-85db1c.netlify.app/">
              <button className="project-github-link">Preview</button>
            </a>
            <a href="https://github.com/arjundangi01/Glossier-clone">
              <button className="project-deployed-link">Source Code</button>
            </a>
          </div>
        </div>
        <div className="container-grid">
          <div>
            <img src={travel} className="project-img" />
          </div>
          <div className="details">
            <h2 className="project-title">VOYAWANDER</h2>
            <p className="project-description">
              VOYAWANDER: Your passport to adventure! Book hotels and more on
              our travel website and embark on unforgettable journeys.
            </p>
            <h1 className="techstacks">Techstacks:</h1>
            <div className="project-tech-stack">
              <img src={react} />
              <img src={redux} />
            </div>
            <a href="https://voyawander-cw.netlify.app/">
              <button className="project-github-link">Preview</button>
            </a>
            <a href="https://github.com/monurajputrko/Voyawander">
              <button className="project-deployed-link">Source Code</button>
            </a>
          </div>
        </div>
      </div>
      <div className="github">
      <h1 className="stats">Github stats</h1>
        <div id="github-streak-stats">
          <img src="https://github-readme-streak-stats.herokuapp.com?user=gauravvxv&theme=dark" alt="GitHub Streak" />
        </div>
        <div id="github-top-langs">
          <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=gauravvxv&layout=compact"/>
        </div>
        <p className="react-activity-calendar">
          <img src="https://ghchart.rshah.org/gauravvxv" />
        </p>
        <p id="github-stats-card">
          <img src="https://github-readme-stats.vercel.app/api?username=gauravvxv&show_icons=true&locale=en&theme=dark" alt="GitHub Stats" />
        </p>
      </div>
    </div>

  );
};

export default Project;
