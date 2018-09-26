import React from "react";
import { view, lensIndex } from "ramda";

const MOVIE_LIST = ["Gudfadern", "Toy story", "Bee Movie"];

const favoriteMovie = view(lensIndex(0), MOVIE_LIST);

const Movies = ({}) => {
  const clicker = () => {
    alert("clicker!");
  };

  return (
    <div>
      <h1>VÄLKOMMEN TILL FILMER</h1>
      <ul>
        {MOVIE_LIST.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
      <h1>Min favoritfilm är {favoriteMovie}</h1>
      <button onClick={() => clicker()}>Klicka här!</button>
			<p>Hejsan!</p>
    </div>
  );
};

export default Movies;
