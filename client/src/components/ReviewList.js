import { useOutletContext } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import Review from "./Review";

function ReviewList() {
  const { reviews, deleteReview, user } = useOutletContext();
  const current_user = user;

  const reviewComponent = reviews.map((review) => {
    return (
      <Review
        key={review.id}
        review={review}
        deleteReview={deleteReview}
        current_user={current_user}
      />
    );
  });

  return (
    <Fade cascade delay={200}>
      <div className="flex flex-wrap justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 mt-10">
        <div>{reviewComponent}</div>
      </div>
    </Fade>
  );
}

export default ReviewList;
