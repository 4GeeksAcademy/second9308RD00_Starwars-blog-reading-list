import React, { Component, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Character = ({ char }) => {
  const { store, actions } = useContext(Context);
  const [character, setCharacter] = useState([]);
  useEffect(() => {
    fetch("https://www.swapi.tech/api/people/" + char.uid)
      .then((response) => response.json())
      .then((jsonifiedData) => setCharacter(jsonifiedData.result.properties))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="cardDiv mx-2" style={{ width: "18rem" }}>
      <div className="m-3 ">
        <img
          className="card-img-top"
          src="https://starwars-visualguide.com/assets/img/characters/4.jpg"
          style={{ width: "20vw" }}
        />
        <div className="card-body">
          <h5 className="card-title">{character.name}</h5>
          <p className="card-text">Gender: {character.gender}</p>
          <p className="card-text">Hair Color: {character.hair_color}</p>
          <p className="card-text">Eye-Color: {character.eye_color}</p>
          <Link to={"/detailschar/" + char.uid}>
            <button
              href={character.url}
              target="_blank"
              className="btn btn-primary"
            >
              Learn More
            </button>
          </Link>
          <button
            onClick={() =>
              actions.addFavorite(character.name, char.uid, "people")
            }
            className="btn btn-primary"
          >
            <i className="fal fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
