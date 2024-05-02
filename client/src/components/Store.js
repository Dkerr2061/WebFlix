import { useNavigate } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";

function Store({ movie, user, addToCart }) {
  const navigate = useNavigate();

  function handleAddToCart() {
    const newItem = {
      user_id: user.id,
      movie_id: movie.id,
    };
    addToCart(newItem);
    navigate("/cart_items");
  }

  return (
    <div className="rounded-3xl border-2 border-slate-700 p-4 lg:p-8 flex-nowrap mb-4 max-lg:max-w-lg max-lg:mx-auto gap-y-4 glass ">
      <Zoom>
        <div className="flex items-center justify-center w-full mt-2">
          <h2 className="italic font-bold font-serif text-4xl leading-9 text-slate-700 mx-4">
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
            <h3 className="font-serif font-bold text-1xl leading-8 text-black">
              Description:
              <div className="flex items-center justify-center text-slate-600">
                <p>{movie.description}</p>
              </div>
            </h3>
          </div>
        </div>

        <div className="detail w-full lg:pl-3">
          <div className="flex items-center justify-end w-full mb-4 mr-4">
            <h3 className="font-serif font-bold text-3xl leading-9 text-gray-900 mr-10">
              ${movie.price}
            </h3>
            <Zoom delay={100}>
              <button
                className="btn btn-primary hover:animate-pulse"
                onClick={handleAddToCart}
              >
                Add To Cart
              </button>
            </Zoom>
          </div>
        </div>
      </Zoom>
    </div>
  );
}

export default Store;
