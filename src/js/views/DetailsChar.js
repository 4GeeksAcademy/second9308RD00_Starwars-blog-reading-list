import React, { Component, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const DetailsChar = () => {
  const params = useParams();
  const [detailCharacter, setDetailCharacter] = useState([]);
  useEffect(() => {
    fetch("https://www.swapi.tech/api/people/" + params.id)
      .then((response) => response.json())
      .then((jsonifiedData) =>
        setDetailCharacter(jsonifiedData.result.properties)
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src="..." className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{detailCharacter.name}</h5>
            <p className="card-text"></p>
          </div>
        </div>
      </div>
    </div>
  );
};
