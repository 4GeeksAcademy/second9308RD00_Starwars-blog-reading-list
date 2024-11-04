import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import { Character } from "../component/Character";
import { Planet } from "../component/Planet";

export const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people")
      .then((response) => response.json())
      .then((jsonifiedData) => setCharacters(jsonifiedData.results))
      .catch((err) => console.log(err));

    fetch("https://www.swapi.tech/api/planets")
      .then((response) => response.json())
      .then((jsonifiedData) => setPlanets(jsonifiedData.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
    
    <div className="text-center mt-5 ">
      <h4 className="text-start" style={{ color: "red" }}>Characters</h4>
      <div className="d-flex">
        <div className="d-flex justify-content-evenly">
          {characters.map((character) => (
            <Character char={character} />
          ))}
        </div>
      </div>
      <h4 className="text-start" style={{ color: "red" }}>Planets</h4>
      <div className="d-flex justify-content-evenly" style={{ width: "120px" }}>
        <h4 style={{ color: "red" }}>Planet</h4>
        <div className="d-flex justify-content-evenly">
          {planets.map((planet) => (
            <Planet plan={planet} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
};
