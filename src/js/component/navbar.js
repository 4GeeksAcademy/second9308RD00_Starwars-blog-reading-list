import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">
          <img
            style={{ maxWidth: "70px" }}
            src="https://vectordiary.com/wp-content/uploads/2021/03/star-wars-logo-font.jpg"
          ></img>
        </span>
      </Link>
      <div className="ml-auto">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href=""
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites
          </a>
          <ul
            className="dropdown-menu"
            style={{ display: store.favorites.length < 1 ? "none" : "" }}
          >
            {store.favorites.map((newFavorite) => (
              <li>
                <a className="dropdown-item" href="#">
                  {newFavorite.name}
                </a>
                <button
                  onClick={() => actions.deleteFavorite(newFavorite.name)}
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </li>
            ))}
          </ul>
        </li>
      </div>
    </nav>
  );
};
