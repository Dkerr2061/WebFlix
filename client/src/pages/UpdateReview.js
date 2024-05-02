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
    <div className="text-center mt-10">
      <Zoom delay={200}>
        <h2 className="text-teal-300 text-5xl mb-4">Update Review</h2>
      </Zoom>
      <Slide cascade delay={500}>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <h2>Rating:</h2>
          <input
            className="input input-bordered input-info w-full max-w-xs mb-4"
            type="text"
            name="rating"
            placeholder="Rating"
            onChange={handleOnChange}
            value={updatedReviewData.rating}
            required
          />
          <h2>Review Text:</h2>
          <input
            className="input input-bordered input-info w-full max-w-xs mb-4"
            type="text"
            name="text"
            placeholder="Review Text"
            onChange={handleOnChange}
            value={updatedReviewData.text}
            required
          />
          <h2>Movie Id:</h2>
          <input
            className="input input-bordered input-info w-full max-w-xs mb-4"
            type="text"
            name="movie_id"
            placeholder="Movie ID"
            onChange={handleOnChange}
            value={updatedReviewData.movie_id}
            required
          />
          <h2>User Id:</h2>
          <input
            className="input input-bordered input-info w-full max-w-xs mb-4"
            type="text"
            name="user_id"
            placeholder="User ID"
            onChange={handleOnChange}
            value={updatedReviewData.user_id}
            required
          />
          <Zoom delay={700}>
            <button
              type="submit"
              className="btn btn-outline btn-info hover:animate-pulse"
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
