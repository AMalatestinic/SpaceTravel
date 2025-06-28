import { NavLink } from "react-router-dom";

export default function HomePage() {
  //default home page displayed when application is started
  return (
    <div>
      <h2>Build a spaceship and travel through the galaxy!</h2>

      <p>
        Select the <NavLink to="/spacecrafts">Spacecrafts</NavLink> page to
        start building spacecrafts or see all your previously builts ships!
      </p>
      <p>
        Select the <NavLink to="/planets">Planets</NavLink> page to see the list
        of planets available to travel and assign available ships to different
        planets!
      </p>
    </div>
  );
}
