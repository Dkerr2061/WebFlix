import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/movies")
      .then((res) => res.json())
      .then((movieData) => setMovies(movieData));
  }, []);

  return (
    <div>
      <NavBar />
      <Outlet context={{ movies: movies }} />
    </div>
  );
}

export default App;
