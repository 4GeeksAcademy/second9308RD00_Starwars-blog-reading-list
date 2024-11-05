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
          <img src="https://starwars-visualguide.com/assets/img/characters/4.jpg" className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{detailCharacter.name}</h5>
            <p className="card-text">Is a fictional character in the Star Wars franchise and is described as a Sith Lord with cybernetic enhancements: 
Appearance
A tall man with black armor, a black helmet, and a cape. He has a raspy breathing voice due to breathing problems from a battle with Obi-Wan Kenobi. 
Personality
Intimidating, with a tendency to enforce discipline through summary execution. He is also known for lashing out at those who displease him. 
History
Formerly known as Anakin Skywalker, a Jedi Knight who was seduced by the dark side of the Force. He was defeated by Obi-Wan Kenobi in a lightsaber battle and was transformed into a cyborg. He later became the apprentice of Darth Sidious and served as the Emperor's right-hand man. 
</p>
          </div>
        </div>
      </div>
    </div>
  );
};
