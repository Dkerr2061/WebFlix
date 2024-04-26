import Store from "./Store";
import { useOutletContext } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

function StoreList() {
  const { movies, users, cartItems } = useOutletContext();

  const storeComponent = movies.map((movie) => {
    return <Store key={movie.id} movie={movie} />;
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
