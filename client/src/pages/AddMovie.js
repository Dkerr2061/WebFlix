import { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import { Slide, Zoom } from "react-awesome-reveal";

function AddMovie() {
  const [movieFormData, setMovieFormData] = useState({
    name: "",
    image: "",
    year: "",
    director: "",
    description: "",
    price: "",
  });
  const { addMovie } = useOutletContext();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const releaseYear = parseInt(movieFormData.year);
    const moviePrice = parseFloat(movieFormData.price);

    addMovie({ ...movieFormData, year: releaseYear, price: moviePrice });
    setMovieFormData({
      name: "",
      image: "",
      year: "",
      director: "",
      description: "",
      price: "",
    });
    navigate("/");
  }

  function updateFormData(event) {
    setMovieFormData({
      ...movieFormData,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className="text-center">
      <Zoom delay={200}>
        <h2 className="text-teal-300 text-5xl mb-4">Add Movie</h2>
      </Zoom>
      <Slide cascade delay={500}>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            className="input input-bordered input-info w-full max-w-xs mb-4"
            type="text"
            name="name"
            placeholder="Movie name"
            onChange={updateFormData}
            value={movieFormData.name}
            required
          />
          <input
            className="input input-bordered input-info w-full max-w-xs mb-4"
            type="text"
            name="image"
            placeholder="Movie image"
            onChange={updateFormData}
            value={movieFormData.image}
            required
          />
          <input
            className="input input-bordered input-info w-full max-w-xs mb-4"
            type="text"
            name="year"
            placeholder="Movie Release Year"
            onChange={updateFormData}
            value={movieFormData.year}
            required
          />
          <input
            className="input input-bordered input-info w-full max-w-xs mb-4"
            type="text"
            name="director"
            placeholder="Director"
            onChange={updateFormData}
            value={movieFormData.director}
            required
          />
          <input
            className="input input-bordered input-info w-full max-w-xs mb-4"
            type="text"
            name="description"
            placeholder="Description"
            onChange={updateFormData}
            value={movieFormData.description}
            required
          />
          <input
            className="input input-bordered input-info w-full max-w-xs mb-4"
            type="text"
            name="price"
            placeholder="Movie Price"
            onChange={updateFormData}
            value={movieFormData.price}
            required
          />
          <Zoom delay={700}>
            <button
              type="submit"
              className="btn btn-outline btn-info hover:animate-pulse"
            >
              Add Movie
            </button>
          </Zoom>
        </form>
      </Slide>
    </div>
  );
}

export default AddMovie;
