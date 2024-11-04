import React, { Component, useEffect, useState } from "react";

export const DetailsPlan = () => {
  const [detailPlanet, setDetailPlanet] = useState([]);
  useEffect(() => {
    fetch("https://www.swapi.tech/api/planets/" + planDetail.uid)
      .then((response) => response.json())
      .then((jsonifiedData) => setDetailPlanet(jsonifiedData.result.properties))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="card mb-3" style="max-width: 540px;">
      <div className="row g-0">
        <div className="col-md-4">
          <img src="..." className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body" style={{ borderBottom: "1px solid red" }}>
            <h5 className="card-title">{planet.name}</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
