import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="nav-container">
        <NavLink className={"nav-link"} to="/">
          projects
        </NavLink>
        <NavLink className={"nav-link"} to="/about">
          about
        </NavLink>
        <NavLink className={"nav-link"} to="/contact">
          contact
        </NavLink>
      </div>
    </>
  );
}

export default Navbar;
