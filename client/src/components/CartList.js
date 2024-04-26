import Cart from "./Cart";
import { useOutletContext } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

function CartList() {
  const { cartItems } = useOutletContext();
  const cartComponent = cartItems.map((cartItem) => {
    return <Cart key={cartItem.id} cartItem={cartItem} />;
  });

  return (
    <Fade cascade delay={200}>
      <div>
        <span>Cart total</span>
      </div>
      <div className="flex flex-wrap justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
        {cartComponent}
      </div>
    </Fade>
  );
}

export default CartList;
