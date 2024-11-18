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
    },
    actions: {
      addFavorite: (name, uid, type) => {
        fetch("https://glowing-rotary-phone-xgx7jq4974qh67wx-3000.app.github.dev/get/initial/favorite/char")
      .then((response) => response.json())
      .then((jsonifiedData) => { console.log(jsonifiedData)})
      .catch((err) => console.log(err));
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
