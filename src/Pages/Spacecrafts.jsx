import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { nanoid } from "nanoid";
import ShipContext from "../Contexts/ShipContext";
import Destroy from "../Components/Destroy";
import Spacecraft from "./Spacecraft";

export default function Spacecrafts() {
  const { ships } = useContext(ShipContext); //grabs ship context
  return (
    <div>
      <nav>
        {/*Button to begin building a spacecraft */}
        <NavLink className="startBtn" to="builder">
          Build a Spacecraft
        </NavLink>
      </nav>
      <Outlet />
      <h2>Available Spacecrafts:</h2>
      {/* If there are no built ships, it will display this message, otherwise will loop through the ships array*/}
      {ships.length === 0 ? (
        <p>
          No available ships. Start by pressing the "Build a Spacecraft" button!
        </p>
      ) : (
        ships.map((ship) => (
          <div className="ships" key={ship.id}>
            <img className="spacecraftImg" src={ship.image_URL}></img>
            <h3>Name: {ship.name}</h3>
            <p>Capacity: {ship.capacity}</p>
            <p>Description: {ship.description}</p>
            <Link to={`/spacecrafts/${ship.id}`}>
              <button className="infoBtn">More Info</button>
            </Link>
            <Destroy id={ship.id} />
          </div>
        ))
      )}
    </div>
  );
}
