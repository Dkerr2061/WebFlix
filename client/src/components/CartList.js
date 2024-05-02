import Cart from "./Cart";
import { useOutletContext } from "react-router-dom";
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
        <span>${roundedTotal}</span>
      </div>
      {cartComponent.length > 0 ? (
        <div className="flex flex-wrap justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
          {cartComponent}
        </div>
      ) : (
        <h1>Your cart is empty!</h1>
      )}
    </Fade>
  );
}

export default CartList;
