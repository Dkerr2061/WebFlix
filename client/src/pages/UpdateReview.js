import { useState, useEffect } from "react";
import { useParams, useOutletContext, useNavigate } from "react-router-dom";
import { Slide, Zoom } from "react-awesome-reveal";

function UpdateReview() {
  const [review, setReview] = useState(null);
  const [updatedReviewData, setUpdatedReviewData] = useState({
    rating: "",
    text: "",
    movie_id: "",
    user_id: "",
  });
  const { id } = useParams();
  const { updateReview } = useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/reviews/${id}`).then((res) => {
      if (res.ok) {
        res.json().then((reviewData) => {
          setReview(reviewData);
          setUpdatedReviewData({
            rating: reviewData.rating,
            text: reviewData.text,
            movie_id: reviewData.movie_id,
            user_id: reviewData.user_id,
          });
        });
      } else if (res.status === 400) {
        res.json().then((errorData) => alert(`Error: ${errorData.error}`));
      }
    });
  }, [id]);

  function handleSubmit(event) {
    event.preventDefault();
    const movieID = parseInt(updatedReviewData.movie_id);
    const userID = parseInt(updatedReviewData.user_id);
    const reviewRating = parseInt(updatedReviewData.rating);
    updateReview(review.id, {
      ...updatedReviewData,
      movie_id: movieID,
      user_id: userID,
      rating: reviewRating,
    });
    setReview({ ...review, ...updatedReviewData });
    navigate("/reviews");
  }

  function handleOnChange(event) {
    setUpdatedReviewData({
      ...updatedReviewData,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className="text-center font-serif mt-10">
      <div>
        <img
          src="https://i.pinimg.com/originals/1d/40/96/1d40962412d6132ac5726978b097bdfe.jpg"
          alt="webflix"
          className="h-96 w-full object-cover shadow-lg"
        />
      </div>
      <Zoom delay={200}>
        <h2 className="text-primary text-5xl my-4">Update Review</h2>
      </Zoom>
      <Slide cascade delay={500}>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <h2>Rating:</h2>
          {/* <input
            className="input input-bordered input-accent w-full max-w-xs mb-4"
            type="text"
            name="rating"
            placeholder="Rating"
            onChange={handleOnChange}
            value={updatedReviewData.rating}
            required
          /> */}
          <select
            className="select select-accent w-full max-w-xs mb-4"
            name="rating"
            onChange={handleOnChange}
            value={updatedReviewData.rating}
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
          <h2>Review Text:</h2>
          <input
            className="input input-bordered input-accent w-full max-w-xs mb-4"
            type="text"
            name="text"
            placeholder="Review Text"
            onChange={handleOnChange}
            value={updatedReviewData.text}
            required
          />
          {/* <h2>Movie Id:</h2>
          <input
            className="input input-bordered input-accent w-full max-w-xs mb-4"
            type="text"
            name="movie_id"
            placeholder="Movie ID"
            onChange={handleOnChange}
            value={updatedReviewData.movie_id}
            required
          />
          <h2>User Id:</h2>
          <input
            className="input input-bordered input-accent w-full max-w-xs mb-4"
            type="text"
            name="user_id"
            placeholder="User ID"
            onChange={handleOnChange}
            value={updatedReviewData.user_id}
            required
          /> */}
          <Zoom delay={700}>
            <button
              type="submit"
              className="btn btn-accent hover:animate-pulse"
            >
              Update Review
            </button>
          </Zoom>
        </form>
      </Slide>
    </div>
  );
}

export default UpdateReview;
