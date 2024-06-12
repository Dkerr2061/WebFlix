import React, { useState, useEffect } from "react";
import { useOutletContext, useNavigate, useLocation } from "react-router-dom";
import { Zoom, Slide } from "react-awesome-reveal";

function AddReview() {
  const { addReview, user } = useOutletContext();
  const navigate = useNavigate();
  const location = useLocation();
  const movie_id = location.state?.movie_id || "";
  // console.log(user.id);

  const [newReview, setNewReview] = useState({
    movie_id: movie_id,
    user_id: user?.id || "",
    rating: "",
    text: "",
  });

  useEffect(() => {
    if (user && movie_id) {
      setNewReview((prevReview) => ({
        ...prevReview,
        movie_id: movie_id,
        user_id: user.id,
      }));
    }
  }, [user, movie_id]);

  function handleSubmit(event) {
    event.preventDefault();
    // const movieID = parseInt(newReview.movie_id);
    // const userID = parseInt(newReview.user_id);
    const movieRating = parseInt(newReview.rating);

    addReview({
      ...newReview,
      // movie_id: movieID,
      // user_id: userID,
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
          {/* <input
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
          /> */}
          <select
            className="select select-accent w-full max-w-xs mb-4"
            name="rating"
            onChange={handleOnChange}
            value={newReview.rating}
            required
          >
            <option disabled value="">
              Choose Rating
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          {/* <input
            className="input input-bordered input-accent w-full max-w-xs mb-4"
            type="text"
            name="rating"
            placeholder="Rating (Whole numbers only, no decimals)"
            onChange={handleOnChange}
            value={newReview.rating}
            required
          /> */}
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
