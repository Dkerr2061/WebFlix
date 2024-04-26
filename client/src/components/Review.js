import { useNavigate } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";

function Review({ review, deleteReview }) {
  const { id, movie, user, text, rating, movie_id, user_id } = review;
  const navigate = useNavigate();

  function navigateToEdit() {
    navigate(`/reviews/${id}`);
  }

  function handleDelete(id) {
    deleteReview(review.id);
  }
  console.log(review);

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl m-4">
      <Zoom>
        <figure className="px-10 pt-10">
          <img
            src={movie.image}
            alt={movie.name}
            className="rounded-xl w-52 h-52 py-1.5"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {movie.name} Reviewed by: {user.username}
          </h2>
          <h6 className="mb-2 text-xl italic tracking-tight text-gray-900 dark:text-white">
            Rating: {rating} | Movie ID: {movie_id} | User ID: {user_id}
          </h6>
          <p>{text}</p>
          <Zoom delay={200}>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary hover:animate-pulse"
                onClick={navigateToEdit}
              >
                Edit Review
              </button>
              <button
                className="btn btn-primary hover:animate-pulse"
                onClick={handleDelete}
              >
                Delete Review
              </button>
            </div>
          </Zoom>
        </div>
      </Zoom>
    </div>
  );
}

export default Review;
