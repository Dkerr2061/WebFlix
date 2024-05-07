import { useState, useEffect } from "react";
import { useParams, useNavigate, useOutletContext } from "react-router-dom";
import { Slide } from "react-awesome-reveal";

function MovieDetail() {
  const [movie, setMovie] = useState(null);
  const [updatedMovieData, setUpdatedMovieData] = useState({
    name: "",
    image: "",
    year: "",
    director: "",
    description: "",
    price: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();
  const { updateMovie, user } = useOutletContext();

  useEffect(() => {
    fetch(`/movies/${id}`)
      .then((res) => res.json())
      .then((movieData) => {
        setMovie(movieData);
        setUpdatedMovieData({
          name: movieData.name,
          image: movieData.image,
          year: movieData.year,
          director: movieData.director,
          description: movieData.description,
          price: movieData.price,
        });
      });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const releaseYear = parseInt(updatedMovieData.year);
    const moviePrice = parseFloat(updatedMovieData.price);

    updateMovie(movie.id, {
      ...updatedMovieData,
      year: releaseYear,
      price: moviePrice,
    });
    setMovie({ ...movie, ...updatedMovieData });
  }

  function handleOnChange(event) {
    setUpdatedMovieData({
      ...updatedMovieData,
      [event.target.name]: event.target.value,
    });
  }

  function navigateToWriteReviews() {
    navigate("/add_review");
  }

  return (
    <Slide delay={300}>
      <div className="flex flex-wrap justify-center page-gradient items-center my-4">
        <div>
          <h1 className="text-center mt-10 mb-4 text-primary text-5xl font-serif font-bold underline">
            Movie Info:
          </h1>
        </div>
        {movie ? (
          <>
            <div className="card lg:card-side bg-base-300 shadow-xl m-4">
              <div className="card-body items-center text-center">
                <figure className="px-10 pt-10">
                  <img
                    src={movie.image}
                    alt={movie.name}
                    className="rounded-xl max-h-80 max-w-80 py-1.5"
                  />
                </figure>
                <h2 className="card-title">{movie.name}</h2>
                <h3> Movie Id: {movie.id}</h3>
                <h4 className="mb-2 text-xl italic tracking-tight text-gray-900">
                  Release Year: {movie.year} | Director: {movie.director}
                </h4>
                <p>{movie.description}</p>
                <div className="card-actions">
                  <button
                    className="btn btn-primary hover:animate-pulse"
                    onClick={navigateToWriteReviews}
                  >
                    Add Review
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
      {user.type === "admin" ? (
        <div className="text-center">
          <h2 className="text-primary text-5xl my-4">Update Movie</h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center mb-4"
          >
            <h2>Movie Name:</h2>
            <input
              className="input input-bordered input-accent w-full max-w-xs mb-4"
              type="text"
              name="name"
              placeholder="Movie name"
              onChange={handleOnChange}
              value={updatedMovieData.name}
              required
            />
            <h2>Movie Image:</h2>
            <input
              className="input input-bordered input-accent w-full max-w-xs mb-4"
              type="text"
              name="image"
              placeholder="Movie image"
              onChange={handleOnChange}
              value={updatedMovieData.image}
              required
            />
            <h2>Release Year:</h2>
            <input
              className="input input-bordered input-accent w-full max-w-xs mb-4"
              type="text"
              name="year"
              placeholder="Movie Release Year"
              onChange={handleOnChange}
              value={updatedMovieData.year}
              required
            />
            <h2>Director:</h2>
            <input
              className="input input-bordered input-accent w-full max-w-xs mb-4"
              type="text"
              name="director"
              placeholder="Director"
              onChange={handleOnChange}
              value={updatedMovieData.director}
              required
            />
            <h2>Description:</h2>
            <input
              className="input input-bordered input-accent w-full max-w-xs mb-4"
              type="text"
              name="description"
              placeholder="Description"
              onChange={handleOnChange}
              value={updatedMovieData.description}
              required
            />
            <h2>Price:</h2>
            <input
              className="input input-bordered input-accent w-full max-w-xs mb-4"
              type="text"
              name="price"
              placeholder="Movie Price"
              onChange={handleOnChange}
              value={updatedMovieData.price}
              required
            />
            <button
              type="submit"
              className="btn btn-accent hover:animate-pulse"
            >
              Update Movie
            </button>
          </form>
        </div>
      ) : null}
    </Slide>
  );
}

export default MovieDetail;
