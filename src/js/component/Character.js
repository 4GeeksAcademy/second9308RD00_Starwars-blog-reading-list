import React, { Component } from "react";

export const Character = ({ character }) => {
  return (
    <div
      className=""
      style={{ width: "120px", height: "60" }}
    >
      <div className="m-3 ">
        <img
          className="card-img-top"
          src={character.image}
          style={{ width: "20vw" }}
        />
        <div className="card-body">
          <h5 className="card-title">{character.name}</h5>
          <p className="card-text">{character.description}</p>
          <a href="..." target="_blank" className="btn btn-primary">
            ghjvjhvjcgh
          </a>
        </div>
      </div>
    </div>
  );
};
