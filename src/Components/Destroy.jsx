import { useContext } from "react";
import ShipContext from "../Contexts/ShipContext";

export default function Destroy({ id }) {
  //Component to add a destroy button to each Spacecraft built

  const { removeShip } = useContext(ShipContext);

  const destroy = () => {
    removeShip(id);
  };

  return (
    <button className="destroyBtn" onClick={destroy}>
      Destroy
    </button>
  );
}
