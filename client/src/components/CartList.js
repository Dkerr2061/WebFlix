import Cart from "./Cart";
import { useOutletContext, useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

function CartList() {
  const { cartItems, deleteCartItems } = useOutletContext();
  const cartComponent = cartItems.map((cartItem) => {
    return (
      <Cart
        key={cartItem.id}
        cartItem={cartItem}
        deleteCartItems={deleteCartItems}
      />
    );
  });

  const navigate = useNavigate();

  function toCheckout() {
    navigate("/checkout");
  }

  const moviePrice = cartItems.map((item) => {
    return item.movie_cart.price;
  });

  const totalCartPrice = moviePrice.reduce((a, v) => {
    return a + v;
  }, 0);

  const roundedTotal = totalCartPrice.toFixed(2);

  return (
    <Fade cascade delay={200}>
      <div>
        <img
          src="./images/cartimage.png"
          alt="webflix"
          className="h-96 w-full object-cover object-top"
        />
      </div>
      <section className="py-24 relative">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <header className="text-center">
              <h2 className="title font-serif font-bold underline text-4xl leading-10 mb-8 text-center text-black">
                Shopping Cart
              </h2>
            </header>
            {cartComponent.length > 0 ? (
              <div className="mt-8">{cartComponent}</div>
            ) : (
              <div className="text-center">
                <h1 className="text-black text-6xl font-serif">
                  Your cart is Empty
                </h1>
              </div>
            )}
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-center justify-between lg:px-6 pb-6 border-b border-gray-200 max-lg:max-w-lg max-lg:mx-auto">
            <h5 className="text-gray-900 font-serif font-semibold underline text-2xl leading-9 w-full max-md:text-center max-md:mb-4">
              Subtotal
            </h5>

            <div className="flex items-center justify-between gap-5 ">
              <h6 className="font-serif font-bold text-3xl lead-10 text-black">
                ${roundedTotal}
              </h6>
            </div>
          </div>
          <div className="max-lg:max-w-lg max-lg:mx-auto">
            <p className="font-normal text-base leading-7 text-gray-500 text-center mb-5 mt-6">
              Shipping taxes, and discounts calculated at checkout
            </p>
            <button
              className="rounded-full py-4 px-6 bg-indigo-600 text-white font-semibold text-lg w-full text-center transition-all duration-500 hover:bg-indigo-700 "
              onClick={toCheckout}
            >
              Checkout
            </button>
          </div>
        </div>
      </section>
    </Fade>
  );
}

export default CartList;
