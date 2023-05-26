import Navbar from "./Navbar";

function Project(props) {
  return (
    <>
      <div className="project-container">
        <img className="project-image" src={props.src} alt="picture" />
        <p>projecttext</p>
      </div>
    </>
  );
}

export default Project;
