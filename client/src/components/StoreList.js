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
      <section className="py-24 relative bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
          <h2 className="title font-serif font-bold underline text-4xl leading-10 mb-8 text-center text-black">
            Store
          </h2>
          <div className="rounded-3xl border-2 border-gray-200 p-4 lg:p-8 flex-nowrap mb-4 max-lg:max-w-lg max-lg:mx-auto gap-y-4 glass ">
            {storeComponent}
          </div>
        </div>
      </section>
    </Fade>
  );
}

export default StoreList;
