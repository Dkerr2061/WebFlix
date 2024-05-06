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
      <section className=" mt-10 justify-center flex">
        <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none font-serif">
          {reviewComponent}
        </div>
      </section>
    </Fade>
  );
}

export default ReviewList;

{
  /* <Fade cascade delay={200}>
      <div className="flex flex-wrap justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 mt-10">
        <div>{reviewComponent}</div>
      </div>
    </Fade> */
}

// relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none font-serif
