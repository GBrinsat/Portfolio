import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <div className="page-heading">
        <h2 className="name-header">Gerrit Brinsat</h2>
        <h3 className="title-header">Fullstack Web Developer</h3>
      </div>

      <Navbar />

      <div className="about-container animation-fadein">
        <img className="about-image" src="/Bewerbungsfoto.jpg" alt="" />
        <div className="project-text">
          <p className="project-header">Hey! </p>
          <p className="text">
            I am Gerrit, a Fullstack Web Developer with a background in
            architecture and carpentry. I found my passion for coding by
            teaching myself the basics of Python. After having been put in the
            position of having to switch my career due to medical reasons, I
            happily took the opportunity to turn my passion into my job.
          </p>
          <p className="text">
            As a Web Developer I am familiar with JavaScript, HTML, CSS, React,
            MongoDB, Express and Node.js. I am always looking for new challenges
            and am eager to expand my knowledge by learning new technologies.
          </p>
          <p className="text">
            I am looking forward to apply my attention for detail, passion for
            coding and thirst for knowledge to my new career. Feel free to get
            in touch! I would love to hear from you!
          </p>
        </div>
      </div>

      <div className="divider"></div>
    </>
  );
}

export default About;
