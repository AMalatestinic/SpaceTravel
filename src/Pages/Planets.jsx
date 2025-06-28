import React, { useContext, useEffect, useState } from "react";
import SpaceTravelMockApi from "../services/SpaceTravelMockApi";
import ShipContext from "../Contexts/ShipContext";

const PlanetsList = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { ships, dispatchShip } = useContext(ShipContext);

  useEffect(() => {
    //calls the mock api to display the planets
    const fetchPlanets = async () => {
      setLoading(true);
      try {
        const response = await SpaceTravelMockApi.getPlanets();
        if (!response.isError) {
          setPlanets(response.data);
        } else {
          setError("Failed to fetch planets");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlanets();
  }, []);

  const handleDispatch = (shipId, planetName) => {
    //calls to ship context to dispatch a ship to a planet
    dispatchShip(shipId, planetName);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {/* Loops through the planets and displays each planets info */}
      <ul>
        {planets.map((planet) => (
          <li className="planets" key={planet.id}>
            <h3 className="planetName">{planet.name}</h3>
            <p className="population">Population: {planet.currentPopulation}</p>

            {/* Container for the planet image and ship assignment */}
            <div className="planet-container">
              <img
                className="planetImg"
                src={planet.pictureUrl}
                alt={planet.name}
                width={200}
              />

              {/* Assigns a ship to a planet */}
              <select
                onChange={(e) => handleDispatch(e.target.value, planet.name)}
                defaultValue=""
                className="assign"
              >
                <option value="" disabled>
                  Assign a ship
                </option>
                {ships.length === 0 ? (
                  <option disabled>Build a ship to assign!</option>
                ) : (
                  ships.map((ship) => (
                    <option key={ship.id} value={ship.id}>
                      {ship.name} (Currently: {ship.planet || "None"})
                    </option>
                  ))
                )}
              </select>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlanetsList;
