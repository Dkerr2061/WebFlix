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
    <div className=" p-4 lg:p-8 flex-nowrap mb-4 max-lg:max-w-lg max-lg:mx-auto gap-y-4 bg-transparent ">
      <Zoom>
        <div className="flex items-center justify-center w-full mt-2">
          <h2 className="italic font-bold font-serif text-4xl leading-9 text-slate-700 mx-4 underline">
            {movie.name}
          </h2>
        </div>

        <div className="img box flex justify-start mt-4">
          <img
            src={movie.image}
            alt={movie.name}
            className="max-w-40 max-h-48 rounded-lg border-2 border-black"
          />
          <div className="flex justify-items-center my-4 mx-3">
            <h3 className="font-serif font-bold text-2xl leading-8 text-black">
              {user.username} says:
              <div className="flex items-center justify-center text-slate-600 text-xl">
                <p>{text}</p>
              </div>
            </h3>
          </div>
        </div>

        <div className="detail w-full lg:pl-3">
          <div className="flex items-center justify-end w-full mb-4 mr-4">
            <h3 className="font-serif font-bold text-xl leading-9 text-gray-900 mr-10">
              Rating: {rating} | Movie ID : {movie_id}
            </h3>
            {current_user.id === user_id ? (
              <Zoom delay={200}>
                <div className="flex justify-end">
                  <button
                    className="btn btn-primary hover:animate-pulse mx-2"
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
        </div>
      </Zoom>
    </div>
  );
}

export default Review;
