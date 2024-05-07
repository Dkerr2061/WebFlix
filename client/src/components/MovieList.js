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
      <div className="flex flex-col">
        <img
          src="https://filmgrab.files.wordpress.com/2014/05/2424.jpg"
          alt="webflix"
          className="h-80 w-full object-cover"
        />
        <div className="flex flex-wrap justify-center mt-2">
          {movieComponent}
        </div>
      </div>
    </Fade>
  );
}

export default MovieList;
