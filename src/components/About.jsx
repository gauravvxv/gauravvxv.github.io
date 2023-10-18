import React from 'react'
import logo from "../Images/formal.png (2).png"
import styles from "../styles/about.module.css"
import git from "../Images/github.png.png"
import linkedin from "../Images/linkedin.png.png"
import insta from "../Images/insta.png.png"
import mail from "../Images/mail.png (2).png"
export const About = () => {
  return (
    <div  id="about" className="about-section">
      {/* top one */}
      <div className='about-container'>
        <h1 className={styles.aboutMe}>About me</h1>
      </div>
      {/* end */}

      <div className={styles.container}>
        <div className={styles.child}>
        <div id="user-detail-intro">
          A dedicated web developer with a strong foundation in coding and a passion for creating innovative and user-friendly websites. Committed to staying updated with emerging web technologies and continuously improving skills.
          <br />
          <a href="https://github.com/gauravvxv" >
          </a>
          <img src={git} id={styles.contact_github1} />
          <a href="https://www.linkedin.com/in/gaurav-sharma-827830247/">
            <img src={linkedin}id={styles.contact_linkedin1}  />
          </a>
          <a href="mailto:gauravxv0410@gmail.com">
            <img src={mail} id={styles.contact_email1}  />
          </a>
          <a href="https://www.instagram.com/gauravvxv/">
            <img src={insta} id={styles.contact_insta1}  />
          </a>
        </div>

        <div className={styles.formalImage}>
          <img src={logo} className='home-img' />
        </div>
        </div>
      </div>
    </div>
  )
}


// <div>
// <div className='about-container'>
//   <h1 className='aboutMe'>About me</h1>
// </div>
// <div className='container'>
// <div className='intro'>
//
// <div>
//
// </div>
// </div>
// <div className='formal-image'>
// <img src={logo} className="home-img"/>
// </div>
// </div>
// </div>