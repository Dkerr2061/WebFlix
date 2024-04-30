import { useState } from "react";
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
    <div className="card w-1/3 glass shadow-xl rounded-lg m-4">
      <Zoom>
        <figure className="px-10 pt-10">
          <img
            src={movie.image}
            alt={movie.name}
            className="rounded-xl w-52 h-62"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-4xl text-slate-700">{movie.name}</h2>
          <h3 className="card-price text-3xl text-black mb-3">
            ${movie.price}
          </h3>
          <Zoom delay={100}>
            <div className="card-actions">
              <button
                className="btn btn-primary hover:animate-pulse"
                onClick={handleAddToCart}
              >
                Add To Cart
              </button>
            </div>
          </Zoom>
        </div>
      </Zoom>
    </div>
  );
}

export default Store;
