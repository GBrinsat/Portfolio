import Navbar from "../components/Navbar";
import Project from "../components/Project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Homepage() {
  return (
    <>
      <div className="page-heading">
        <h2 className="name-header">Gerrit Brinsat</h2>
        <h3 className="title-header">Fullstack Web Developer</h3>
      </div>

      <Navbar />

      <div className="project-container animation-fadein">
        <img
          className="project-image"
          src="/Changeling Homepage.png"
          alt="picture"
        />
        <div className="project-text">
          <h3 className="project-header">Changeling</h3>
          <p className="subtitle">a dnd app for beginner</p>
          <p className="text">
            This web application is designed to help newcomers to the popular
            game Dungeons & Dragons navigate the complexities of character
            creation.
          </p>
          <p className="text">
            Changeling integrates the OpenAI - API to use ChatGPT for writing
            intricate and exciting backstories for each created character.
          </p>
          <p className="text">
            The website was created using the React framework with the goal of
            translating it to React Native and uploading it to the app-store.
          </p>

          <a className="underline" href="https://changeling.netlify.app/">
            Changeling
          </a>

          <div className="tech-stack">
            <p className="tech">Javascript | HTML | CSS | React | Bootstrap</p>
            <p className="tech">ChatGPT | Express | Node.js | MongoDB</p>
          </div>
        </div>
      </div>
      <div className="divider"></div>

      <div className="project-container animation-fadein">
        <img
          className="project-image"
          src="/Nutritionest Homepage2.png"
          alt="picture"
        />
        <div className="project-text">
          <h3 className="project-header">Nutritionest</h3>
          <p className="subtitle">nutrition tracking made easy</p>

          <p className="text">
            A website to simplify eating healthy and keeping a balanced diet.
            Search for food items and save the nutrition-data in your profile.
          </p>
          <p className="text">
            With the integration of a powerful API, the user can search in a
            database of over 800.000 entries.
          </p>
          <p className="text">
            Co-created with{" "}
            <a href="https://www.linkedin.com/in/kristof-rombauts/">
              Kristof Rombauts
            </a>{" "}
            and{" "}
            <a href="https://www.linkedin.com/in/matthew-neckelmann-12950a1b8/">
              Matthew Neckelmann
            </a>
          </p>

          <a href="https://nutritionest.fly.dev/">Nutritionest</a>

          <div className="tech-stack">
            <p className="tech">Javascript | HTML | CSS | Bootstrap</p>
            <p className="tech">Express | Node.js | MongoDB</p>
          </div>
        </div>
      </div>
      <div className="divider"></div>

      <div className="project-container animation-fadein">
        <img className="project-image" src="/AC-V2.png" alt="picture" />
        <div className="project-text">
          <h3 className="project-header">Arena Champion</h3>
          <p className="subtitle">become the strongest contender</p>
          <p className="text">
            Fight through four different fights in this turn-based RPG. Getting
            stronger with every fight to finally beat the current Champion.
          </p>
          <p className="text">
            This project was a great way to deepen my understanding of
            DOM-manipulation and simple JavaScript functions
          </p>

          <a href="https://gbrinsat.github.io/Arena-Champion/">
            Arena Champion
          </a>
          <div className="tech-stack">
            <p className="tech">Javascript | HTML | CSS</p>
            <p className="tech">Express | Node.js | P5 Library</p>
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </>
  );
}

export default Homepage;
