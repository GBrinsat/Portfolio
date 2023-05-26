import Navbar from "../components/Navbar";

function Contact() {
  return (
    <>
      <div className="page-heading">
        <h2 className="name-header">Gerrit Brinsat</h2>
        <h3 className="title-header">Fullstack Web Developer</h3>
      </div>

      <Navbar />

        <div className="divider"></div>
      <div className="contact-container">
        <p className="text">Write me an <a className="contact-link" href="mailto:gerrit.brinsat@gmx.de">Email</a></p>
        <p className="text">Connect via <a className="contact-link" href="https://www.linkedin.com/in/gerrit-brinsat/">LinkedIn</a></p>
        <p className="text">Check out my <a className="contact-link" href="https://www.canva.com/design/DAFgF3vKYCs/xYcekPWCihQ7k6q90Az1VQ/view?utm_content=DAFgF3vKYCs&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink">CV</a></p>
      </div>
    </>
  );
}

export default Contact;
