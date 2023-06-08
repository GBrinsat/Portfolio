import Navbar from "../components/Navbar";
import { useState } from "react";

function About() {
  const [de, setDe] = useState(false);
  const [en, setEn] = useState(true);

  function switchToDe(e) {
    e.preventDefault();
    setEn(false);
    setDe(true);
  }

  function switchToEn(e) {
    e.preventDefault();
    setEn(true);
    setDe(false);
  }

  return (
    <>
      <div className="page-heading">
        <h2 className="name-header">Gerrit Brinsat</h2>
        <h3 className="title-header">Fullstack Web Developer</h3>
      </div>

      <Navbar />

      {en === true ? (
        <>
          <div className="language-container">
            <span className="language-link" onClick={switchToEn}>
              • en
            </span>
            <span className="language-link" onClick={switchToDe}>
              de
            </span>
          </div>

          <div className="container about-container animation-fadein">
            <img className="col col-md-6 about-image" src="/Bewerbungsfoto.jpg" alt="" />
            <div className="col col-md-6 project-text">
              <h3 className="project-header">Hey! </h3>
              <p className="text">
                I am Gerrit, a Fullstack Web Developer with a background in
                architecture and carpentry. I found my passion for coding by
                teaching myself the basics of Python. After having been put in
                the position of having to switch my career due to medical
                reasons, I happily took the opportunity to turn my passion into
                my job.
              </p>
              <p className="text">
                As a Web Developer I am familiar with JavaScript, HTML, CSS,
                React, MongoDB, Express and Node.js and Git. I am always looking
                for new challenges and am eager to expand my knowledge by
                learning new technologies.
              </p>
              <p className="text">
                I am looking forward to apply my attention for detail, passion
                for coding and thirst for knowledge to my new career. Feel free
                to get in touch! I would love to hear from you!
              </p>
            </div>
          </div>

          <div className="divider"></div>
        </>
      ) : (
        <>
          <div className="language-container">
            <span className="language-link" onClick={switchToEn}>
              en
            </span>
            <span className="language-link" onClick={switchToDe}>
              • de
            </span>
          </div>

          <div className="about-container animation-fadein">
            <img className="about-image" src="/Bewerbungsfoto.jpg" alt="" />
            <div className="project-text">
              <h3 className="project-header">Hey! </h3>
              <p className="text">
                Ich bin Gerrit, ein Fullstack Web Developer mit Hintergrund in
                der Architektur und Tischlerei. Ich habe meine Passion für das
                Programmieren entdeckt, als ich mir die Grundlagen von Python
                selber beigebracht habe. Als ich meine Karriere aus
                medizinischen Gründen wechseln musste, habe ich die Möglichkeit
                gerne genutzt um aus meiner Passion meinen Job zu machen.
              </p>
              <p className="text">
                Als Web Developer bin ich vertraut mit JavaScript, HTML, CSS,
                React, MongoDB, Express.js, Node.js und Git. Ich suche stets
                nach neuen Herausforderungen und Möglichkeiten mein Wissen zu
                erweitern.
              </p>
              <p className="text">
                Ich freue mich darauf mein Auge für Details, meine Passion für
                das Programmierem und meinen Durst nach Wissen in meine Karriere
                einfließen zu lassen. Ich freue mich von dir zu hören!
              </p>
            </div>
          </div>

          <div className="divider"></div>
        </>
      )}
    </>
  );
}

export default About;
