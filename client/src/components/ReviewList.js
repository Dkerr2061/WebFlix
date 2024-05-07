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
      <div className="flex flex-col mt-10">
        <img
          src="./images/iron2.png"
          alt="webflix"
          className="h-96 w-full object-cover shadow-lg"
        />
        <section className="py-24 relative">
          <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
            <h2 className="title font-serif font-bold underline text-4xl leading-10 mb-8 text-center text-black">
              Reviews:
            </h2>
            <div className=" p-4 lg:p-8 flex-nowrap mb-4 max-lg:max-w-lg max-lg:mx-auto gap-y-4 bg-transparent ">
              {reviewComponent}
            </div>
          </div>
        </section>
      </div>
    </Fade>
  );
}

export default ReviewList;
