import { Zoom } from "react-awesome-reveal";

function Cart({ cartItem, deleteCartItems }) {
  const { id, movie_cart, user_cart } = cartItem;

  function handleDelete() {
    deleteCartItems(id);
  }

  return (
    <div className="rounded-3xl border-2 border-slate-700 p-4 lg:p-8 flex-nowrap mb-4 max-lg:max-w-lg max-lg:mx-auto gap-y-4 glass ">
      <Zoom>
        <div className="flex items-center justify-center w-full mt-2">
          <h2 className="italic font-bold font-serif text-4xl leading-9 text-slate-700 mx-4">
            {movie_cart.name}
          </h2>
        </div>

        <div className="img box flex justify-start mt-4">
          <img
            src={movie_cart.image}
            alt={movie_cart.name}
            className="max-w-40 max-h-48 rounded-lg border-2 border-black"
          />
        </div>

        <div className="detail w-full lg:pl-3">
          <div className="flex items-center justify-end w-full mb-4 mr-4">
            <h3 className="font-serif font-bold text-3xl leading-9 text-gray-900 mr-10">
              ${movie_cart.price}
            </h3>
            <Zoom delay={100}>
              <button
                className="btn btn-primary hover:animate-pulse"
                onClick={handleDelete}
              >
                Remove From Cart
              </button>
            </Zoom>
          </div>
        </div>
      </Zoom>
    </div>
  );
}

export default Cart;
