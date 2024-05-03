import { Zoom } from "react-awesome-reveal";

function Cart({ cartItem, deleteCartItems }) {
  const { id, movie_cart, user_cart } = cartItem;

  function handleDelete() {
    deleteCartItems(id);
  }

  return (
    <Zoom>
      <ul className="space-y-4 mb-4">
        <li className="flex items-center gap-4">
          <img
            src={movie_cart.image}
            alt={movie_cart.name}
            className="size-16 rounded object-cover"
          />
          <div>
            <h3 className="text-md text-gray-900 font-serif font-bold">
              {movie_cart.name}
            </h3>
          </div>
          <div className="flex flex-1 items-center justify-end gap-2">
            <h4 className="text-xl font-serif text-slate-700">
              ${movie_cart.price}
            </h4>
            <Zoom delay={200}>
              <button
                className="btn btn-primary hover:animate-pulse"
                onClick={handleDelete}
              >
                Remove From Cart
              </button>
            </Zoom>
          </div>
        </li>
      </ul>
    </Zoom>
  );
}

export default Cart;
