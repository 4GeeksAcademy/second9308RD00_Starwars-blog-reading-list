import React from "react";
import "../../styles/home.css";
import { Character } from "../component/Character";
import { Planet } from "../component/Planet";

export const Home = () => {
  var characters = [
    {
      name: "Smile 2",
      //Gender: "",
      //Hair Color:"",
      //Eye Color:"",
      image:
        "https://static.ipic.com/filmimage/HO00003044/Smile_2.jpg?width=400&maxWidth=400",
      description:
        "About to embark on a new world tour, global pop sensation Skye Riley (Naomi Scott) begins experiencing increasingly terrifying and inexplicable events.",
    },
    {
      name: "Beetljuice",
      //Gender: "",
      //Hair Color:"",
      //Eye Color:"",
      image:
        "https://all.web.img.acsta.net/img/88/01/8801185034fbb3e22b654c923f649201.jpg/r_2500_x",
      description:
        "The Maitlands, a recently deceased couple, are unable to leave their New England home and are forced to haunt it after a car accident.",
    },
    {
      name: "Deadpool & Wolverine",
      //Gender: "",
      //Hair Color:"",
      //Eye Color:"",
      image:
        "https://cdn.marvel.com/content/1x/deadpoolandwolverine_lob_crd_03.jpg",
      description:
        "Marvel Studios’ ”Deadpool & Wolverine” finds Wade Wilson with his past as the morally flexible Deadpool behind him.",
    },
    {
      name: "The Time Traveler's Wife",
      //Gender: "",
      //Hair Color:"",
      //Eye Color:"",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ5M--dYhp84VeJn-03ZQmZEygBdTUAtFKJKVoJ_TENS6CjCie9",
      description:
        "Chicago librarian Henry De Tamble (Eric Bana) suffers from a rare genetic disorder that causes him to drift uncontrollably back and forth through time.",
    },
  ];

  var planets = [
    {
      name: "Smile 2",
      //Gender: "",
      //Hair Color:"",
      //Eye Color:"",
      image:
        "https://static.ipic.com/filmimage/HO00003044/Smile_2.jpg?width=400&maxWidth=400",
      description:
        "About to embark on a new world tour, global pop sensation Skye Riley (Naomi Scott) begins experiencing increasingly terrifying and inexplicable events.",
    },
    {
      name: "Beetljuice",
      //Gender: "",
      //Hair Color:"",
      //Eye Color:"",
      image:
        "https://all.web.img.acsta.net/img/88/01/8801185034fbb3e22b654c923f649201.jpg/r_2500_x",
      description:
        "The Maitlands, a recently deceased couple, are unable to leave their New England home and are forced to haunt it after a car accident.",
    },
    {
      name: "Deadpool & Wolverine",
      //Gender: "",
      //Hair Color:"",
      //Eye Color:"",
      image:
        "https://cdn.marvel.com/content/1x/deadpoolandwolverine_lob_crd_03.jpg",
      description:
        "Marvel Studios’ ”Deadpool & Wolverine” finds Wade Wilson with his past as the morally flexible Deadpool behind him.",
    },
    {
      name: "The Time Traveler's Wife",
      //Gender: "",
      //Hair Color:"",
      //Eye Color:"",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ5M--dYhp84VeJn-03ZQmZEygBdTUAtFKJKVoJ_TENS6CjCie9",
      description:
        "Chicago librarian Henry De Tamble (Eric Bana) suffers from a rare genetic disorder that causes him to drift uncontrollably back and forth through time.",
    },
  ];

  return (
    <div className="text-center mt-5 ">
      <div
        className=""
        style={{ width: "120px", height: "60" }}
      >
        <h4 style={{ color: "red" }}>Characters</h4>
        <div>
          {characters.map((character) => (
            <Character character={character} />
          ))}
        </div>
      </div>

      <div
        className=""
        style={{ width: "120px", height: "60" }}
      >
        <h4 style={{ color: "red" }}>Planet</h4>
        <div>
          {planets.map((planet) => (
            <Planet planet={planet} />
          ))}
        </div>
      </div>
    </div>
  );
};
