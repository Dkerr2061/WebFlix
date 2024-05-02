import Movie from "./Movie";
import { useOutletContext } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

function MovieList() {
  const { movies, deleteMovie, user } = useOutletContext();

  const movieComponent = movies.map((movie) => {
    return (
      <Movie
        key={movie.id}
        movie={movie}
        deleteMovie={deleteMovie}
        user={user}
      />
    );
  });

  return (
    <Fade cascade delay={200}>
      <div className="flex flex-wrap justify-center bg-gradient-to-r from-cyan-500 to-blue-500 mt-10">
        {movieComponent}
      </div>
    </Fade>
  );
}

export default MovieList;
