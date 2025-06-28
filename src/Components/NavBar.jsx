import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  //navbar for the application
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="spacecrafts">Spacecrafts</NavLink>
      <NavLink to="planets">Planets</NavLink>
    </nav>
  );
}
