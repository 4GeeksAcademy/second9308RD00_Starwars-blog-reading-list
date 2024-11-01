import React, { Component } from "react";

export const Planet = ({ planet }) => {
  return (
    <div
      className=""
      style={{ width: "120px", height: "60" }}
    >
      <div className="m-3">
        <img
          className="card-img-top"
          src={planet.image}
          style={{ width: "20vw" }}
        />
        <div className="card-body">
          <h5 className="card-title">{planet.name}</h5>
          <p className="card-text">{planet.description}</p>
          <a href="..." target="_blank" className="btn btn-primary">
            vgvgchgc
          </a>
        </div>
      </div>
    </div>
  );
};
