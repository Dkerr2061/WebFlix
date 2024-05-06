import { useNavigate } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";

function Review({ review, deleteReview, current_user }) {
  const { id, movie, user, text, rating, movie_id, user_id } = review;
  const navigate = useNavigate();

  function navigateToEdit() {
    navigate(`/reviews/${id}`);
  }

  function handleDelete(id) {
    deleteReview(review.id);
  }

  return (
    <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
      <Zoom>
        <img
          src={movie.image}
          alt={movie.name}
          className="relative inline-block h-[150px] w-[150px] !rounded object-cover object-center"
        />

        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <h2 className="block text-xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {movie.name} Reviewed by: {user.username}
            </h2>
            <div className="5 flex items-center gap-0">
              <h6 className="mb-2 text-xl italic tracking-tight text-gray-900">
                Rating: {rating} | Movie ID: {movie_id}
              </h6>
            </div>
          </div>
          <div className="mb-6 p-0">
            <p className="block text-xl font-medium leading-relaxed text-inherit antialiased">
              {text}
            </p>
          </div>
          {current_user.id === user_id ? (
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
          ) : null}
        </div>
      </Zoom>
    </div>
  );
}

export default Review;
