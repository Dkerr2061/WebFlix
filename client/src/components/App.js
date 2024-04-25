import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  // Movie data and functions:

  useEffect(() => {
    fetch("/movies")
      .then((res) => res.json())
      .then((movieData) => setMovies(movieData));
  }, []);

  function addMovie(movieData) {
    fetch("/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movieData),
    }).then((res) => {
      if (res.ok) {
        res.json().then((newMovieData) => {
          setMovies([...movies, newMovieData]);
          navigate("/");
        });
      } else if (res.status === 400) {
        res.json().then((errorData) => alert(`Error: ${errorData}`));
      } else {
        res.json().then(() => alert("Error: Something went wrong."));
      }
    });
  }

  function updateMovie(id, updatedMovie) {
    fetch(`/movies/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedMovie),
    }).then((res) => {
      if (res.ok) {
        res.json().then((updatedMovieData) => {
          setMovies((movies) =>
            movies.map((movie) => {
              if (movie.id === updatedMovieData.id) {
                return updatedMovieData;
              } else {
                return movie;
              }
            })
          );
        });
      } else if (res.status === 400) {
        res.json().then((errorData) => {
          alert(`Error ${errorData.error}`);
        });
      }
    });
  }

  return (
    <div>
      <NavBar />
      <Outlet context={{ movies: movies, addMovie, updateMovie }} />
    </div>
  );
}

export default App;
