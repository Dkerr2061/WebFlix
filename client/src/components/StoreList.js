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
      <div className="flex flex-wrap justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
        {storeComponent}
      </div>
    </Fade>
  );
}

export default StoreList;
