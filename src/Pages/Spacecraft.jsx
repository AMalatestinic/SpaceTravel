import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ShipContext from "../Contexts/ShipContext";

export default function Spacecraft() {
  const { id } = useParams();
  const { ships } = useContext(ShipContext);
  const ship = ships.find((s) => s.id === id);
  const navigate = useNavigate();

  if (!ship) {
    return <h2>Ship not found!</h2>;
  }
  return (
    <div>
      <img className="spacecraftImg" src={ship.image_URL} />
      <p>Name: {ship.name}</p>
      <p>Capacity: {ship.capacity}</p>
      <p>Description: {ship.description}</p>
      <p>
        Current Planet: <strong>{ship.planet || "Not assigned"}</strong>
      </p>
      <button className="backBtn" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
}
