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

  return (
    <div>
      <NavBar />
      <Outlet context={{ movies: movies, addMovie }} />
    </div>
  );
}

export default App;
