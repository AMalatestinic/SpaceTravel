import { NavLink } from "react-router-dom";

export default function NotFound() {
  //page for when a URL is not recognized
  return (
    <div>
      <h2>Page not found!</h2>
      <p>
        Go to the <NavLink to="/">Homepage</NavLink>
      </p>
    </div>
  );
}
