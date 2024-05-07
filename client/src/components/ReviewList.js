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
      <div>
        <img
          src="./images/iron2.png"
          alt="webflix"
          className="h-96 w-full object-cover"
        />
      </div>
      <div>
        <h1 className="text-primary font-serif font-bold underline text-center text-5xl my-4">
          Reviews:
        </h1>
      </div>
      <section className="my-4 justify-center flex">
        <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none font-serif">
          {reviewComponent}
        </div>
      </section>
    </Fade>
  );
}

export default ReviewList;
