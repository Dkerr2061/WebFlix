import { useNavigate } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";

function Movie({ movie, deleteMovie, user }) {
  const { id } = movie;
  const navigate = useNavigate();

  function navigateToMovieDetails() {
    navigate(`/movies/${id}`);
  }

  function handleDelete() {
    deleteMovie(movie.id);
  }

  return (
    <div className="card w-1/3 glass shadow-xl rounded-lg m-4">
      <Zoom>
        <figure className="px-10 pt-10">
          <img
            src={movie.image}
            alt={movie.name}
            className="rounded-xl w-52 h-62"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-4xl text-slate-700">{movie.name}</h2>
          <Zoom delay={100}>
            <div className="card-actions">
              <button
                className="btn btn-primary hover:animate-pulse"
                onClick={navigateToMovieDetails}
              >
                Movie Details
              </button>
              {user.type === "admin" ? (
                <button
                  className="btn btn-primary hover:animate-pulse"
                  onClick={handleDelete}
                >
                  Delete Movie
                </button>
              ) : null}
            </div>
          </Zoom>
        </div>
      </Zoom>
    </div>
  );
}

export default Movie;
