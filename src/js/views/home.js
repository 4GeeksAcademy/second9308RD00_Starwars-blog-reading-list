import React, { useEffect, useState, useContext } from "react";
import "../../styles/home.css";
import { Character } from "../component/Character";
import { Planet } from "../component/Planet";
import { Context } from "../store/appContext";


export const Home = () => {
  const { store, actions } = useContext(Context);

  let { characters, planets } = store;

  useEffect(() => {
    fetch("https://glowing-rotary-phone-xgx7jq4974qh67wx-3000.app.github.dev/get/initial")
      .then((response) => response.json())
      .then((jsonifiedData) => {
        actions.setPlanets(jsonifiedData.planet_records)
        actions.setCharacters(jsonifiedData.character_records)})
      .catch((err) => console.log(err));

    
  }, []);

  return (
    <>
    
    <div className="text-center mt-5 ">
      <h4 className="text-start" style={{ color: "red" }}>Characters</h4>
      <div className="d-flex">
        <div className="d-flex justify-content-evenly">
          {characters.map((character) => {

            return <Character character={character} />
})}
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
