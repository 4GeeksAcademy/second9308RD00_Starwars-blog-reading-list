import React, { Component, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planet = ({ plan }) => {
  const { store, actions } = useContext(Context);

  const [planet, setPlanet] = useState([]);
  useEffect(() => {
    fetch("https://www.swapi.tech/api/planets/" + plan.id)
      .then((response) => response.json())
      .then((jsonifiedData) => setPlanet(jsonifiedData.result.properties))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="m-3">
      <img
        className="card-img-top"
        src="https://starwars-visualguide.com/assets/img/starships/9.jpg"
        style={{ width: "20vw" }}
      />
      <div className="card-body">
        <h5 className="card-title">{planet.name}</h5>
        <p className="card-text">Population: {planet.population}</p>
        <p className="card-text">Terrain: {planet.terrain}</p>
        <Link to={"/detailsplan/" + plan.id}>
          <button href={planet.url} target="_blank" className="btn btn-primary">
            Learn More
          </button>
        </Link>
        <button
          onClick={() => actions.addFavorite(planet.name, plan.id, "planets")}
          className="btn btn-primary"
        >
          <i className="fal fa-heart"></i>
        </button>
      </div>
    </div>
  );
};
