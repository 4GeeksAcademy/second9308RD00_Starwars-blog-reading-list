import { Planet } from "../component/Planet";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      favorites: [],
      planets: [],
      characters: [],
      passwords: [],
      username: "",
      userID: 1
    },
    actions: {

      userPassword: () => {





      },

      setPlanets: (planets) => {
        setStore({
          planets: planets,
        })

      },

      setCharacters: (char) => {
        setStore({
          characters: char,
        })

      },

      addFavorite: (name, user_id, entity_id, type) => {
        if (type == "people") {
          fetch("https://glowing-rotary-phone-xgx7jq4974qh67wx-3000.app.github.dev/favorite/character", {
            method: "POST",
            body: JSON.stringify({
              "name": name,
              "user_id": user_id,
              "planet_id": null,
              "char_id": entity_id
            }),
            headers: {
              "Content-Type": "application/json",
            }
          })
            .then((response) => response.json())
            .then(jsonifiedData => setStore({ favorites: jsonifiedData }))
            .catch((err) => console.log(err));

        } else {
          fetch("https://glowing-rotary-phone-xgx7jq4974qh67wx-3000.app.github.dev/favorite/planet", {
            method: "POST",
            body: JSON.stringify({
              "name": name,
              "user_id": user_id,
              "planet_id": entity_id,
              "char_id": null,
            }),
            headers: {
              "Content-Type": "application/json",
            }
          })
            .then((response) => response.json())
            .then((jsonifiedData) => { setStore({ favorites: jsonifiedData }) })
            .catch((err) => console.log(err))
        }

      },

      deleteFavorite: (name) => {
        let filteredArray = getStore().favorites.filter((element) => {
          return element.name != name;
        });
        //filter a favortie from copy of favorites array
        setStore({
          favorites: filteredArray,
          //new filtered local favorites array
        });
      },

      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
          fetch().then().then(data => setStore({ "foo": data.bar }))
        */
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
