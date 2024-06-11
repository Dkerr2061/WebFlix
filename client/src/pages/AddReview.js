import React, { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import { Zoom, Slide } from "react-awesome-reveal";

function AddReview() {
  const [newReview, setNewReview] = useState({
    movie_id: "",
    user_id: "",
    rating: "",
    text: "",
  });
  const { addReview, user, filteredMovies } = useOutletContext();
  const navigate = useNavigate();
  console.log(user);
  console.log(filteredMovies);

  function handleSubmit(event) {
    event.preventDefault();
    const movieID = parseInt(newReview.movie_id);
    const userID = parseInt(newReview.user_id);
    const movieRating = parseInt(newReview.rating);

    addReview({
      ...newReview,
      movie_id: movieID,
      user_id: userID,
      rating: movieRating,
    });

    setNewReview({
      movie_id: "",
      user_id: "",
      rating: "",
      text: "",
    });
    navigate("/reviews");
  }

  function handleOnChange(event) {
    setNewReview({
      ...newReview,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className="text-center mt-10 font-serif">
      <div>
        <img
          src="https://i0.wp.com/insidefilmroom.com/wp-content/uploads/2020/04/dune-1-1-e1586871398593.jpg?fit=2000%2C850&ssl=1"
          alt="webflix"
          className="h-96 w-full object-cover shadow-lg"
        />
      </div>
      <Zoom delay={200}>
        <h2 className="text-accent font-serif text-5xl my-4">Add Review</h2>
      </Zoom>
      <Slide cascade delay={500}>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            className="input input-bordered input-accent w-full max-w-xs mb-4"
            type="text"
            name="movie_id"
            placeholder="Movie ID"
            onChange={handleOnChange}
            value={newReview.movie_id}
            required
          />
          <input
            className="input input-bordered input-accent w-full max-w-xs mb-4"
            type="text"
            name="user_id"
            placeholder="User ID"
            onChange={handleOnChange}
            value={newReview.user_id}
            required
          />
          <input
            className="input input-bordered input-accent w-full max-w-xs mb-4"
            type="text"
            name="rating"
            placeholder="Rating (Whole numbers only, no decimals)"
            onChange={handleOnChange}
            value={newReview.rating}
            required
          />
          <textarea
            className="textarea textarea-bordered textarea-accent textarea-lg w-full max-w-xs mb-4"
            type="text"
            name="text"
            placeholder="Review Text"
            onChange={handleOnChange}
            value={newReview.text}
            required
          />
          <Zoom delay={700}>
            <button
              type="submit"
              className="btn btn-accent hover:animate-pulse"
            >
              Add Review
            </button>
          </Zoom>
        </form>
      </Slide>
    </div>
  );
}

export default AddReview;
