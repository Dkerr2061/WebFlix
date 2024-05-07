import Store from "./Store";
import { useOutletContext } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

function StoreList() {
  const { movies, user, cartItems, addToCart } = useOutletContext();

  const storeComponent = movies.map((movie) => {
    return (
      <Store key={movie.id} movie={movie} user={user} addToCart={addToCart} />
    );
  });

  return (
    <Fade cascade delay={200}>
      <div className="flex flex-col mt-10">
        <img
          src="https://i.pinimg.com/originals/35/a2/39/35a239796763957103a50dd3b41a92be.png"
          alt="webflix"
          className="h-96 w-full object-cover"
        />
        <section className="py-24 relative">
          <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
            <h2 className="title font-serif font-bold underline text-4xl leading-10 mb-8 text-center text-black">
              Store
            </h2>
            <div className="rounded-3xl border-2 border-gray-200 p-4 lg:p-8 flex-nowrap mb-4 max-lg:max-w-lg max-lg:mx-auto gap-y-4 bg-base-200 ">
              {storeComponent}
            </div>
          </div>
        </section>
      </div>
    </Fade>
  );
}

export default StoreList;
