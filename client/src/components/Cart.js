import { Zoom } from "react-awesome-reveal";

function Cart({ cartItem, deleteCartItems }) {
  const { id, movie_cart, user_cart } = cartItem;

  function handleDelete() {
    deleteCartItems(id);
  }

  return (
    <div className="card w-1/3 glass shadow-xl rounded-lg m-4">
      <Zoom>
        <figure className="px-10 pt-10">
          <img
            src={movie_cart.image}
            alt={movie_cart.name}
            className="rounded-xl w-52 h-62"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-4xl text-slate-700">
            {movie_cart.name}
          </h2>
          <h3 className="card-price text-3xl text-black mb-3">
            ${movie_cart.price}
          </h3>
          <Zoom delay={100}>
            <div className="card-actions">
              <button
                className="btn btn-primary hover:animate-pulse"
                onClick={handleDelete}
              >
                Remove From Cart
              </button>
            </div>
          </Zoom>
        </div>
      </Zoom>
    </div>
  );
}

export default Cart;
