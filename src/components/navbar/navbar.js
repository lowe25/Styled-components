import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <NavLink to="/">
        <li>Home</li>
      </NavLink>

      <NavLink to="/about">
        <li>About</li>
      </NavLink>

      <NavLink to="/services">
        <li>Services</li>
      </NavLink>

      <NavLink to="/contact">
        <li>Contact</li>
      </NavLink>
    </nav>
  );
}

export default Navbar;
