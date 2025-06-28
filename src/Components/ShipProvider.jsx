import ShipContext from "../Contexts/ShipContext";
import { useState } from "react";

const ShipProvider = ({ children }) => {
  const [ships, setShips] = useState([]);

  const addShip = (ship) => {
    //adds a ship to the ships arrray
    setShips((prevShips) => {
      const updatedShips = [...prevShips, ship];
      console.log("Updated Ships:", updatedShips);
      return updatedShips;
    });
  };

  const removeShip = (id) => {
    //removes a ship from the ships array
    setShips((prevShips) => prevShips.filter((ship) => ship.id !== id));
  };

  const dispatchShip = (shipId, planetName) => {
    //dispatches a ship to a planet
    setShips((prevShips) => {
      return prevShips.map((ship) =>
        ship.id === shipId ? { ...ship, planet: planetName } : ship
      );
    });
  };

  return (
    <ShipContext.Provider value={{ ships, addShip, removeShip, dispatchShip }}>
      {children}
    </ShipContext.Provider>
  );
};

export default ShipProvider;
