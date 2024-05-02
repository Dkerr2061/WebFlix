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
  const { addReview } = useOutletContext();
  const navigate = useNavigate();

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
    <div className="text-center mt-10">
      <Zoom delay={200}>
        <h2 className="text-teal-300 text-5xl mb-4">Add Review</h2>
      </Zoom>
      <Slide cascade delay={500}>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            className="input input-bordered input-info w-full max-w-xs mb-4"
            type="text"
            name="movie_id"
            placeholder="Movie ID"
            onChange={handleOnChange}
            value={newReview.movie_id}
            required
          />
          <input
            className="input input-bordered input-info w-full max-w-xs mb-4"
            type="text"
            name="user_id"
            placeholder="User ID"
            onChange={handleOnChange}
            value={newReview.user_id}
            required
          />
          <input
            className="input input-bordered input-info w-full max-w-xs mb-4"
            type="text"
            name="rating"
            placeholder="Rating"
            onChange={handleOnChange}
            value={newReview.rating}
            required
          />
          <input
            className="input input-bordered input-info w-full max-w-xs mb-4"
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
              className="btn btn-outline btn-info hover:animate-pulse"
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
