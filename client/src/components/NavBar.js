import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

function NavBar({ user, logOutUser, cartItems, searchText, onSearchText }) {
  const location = useLocation();
  const navigate = useNavigate();

  const moviePrice = cartItems.map((item) => {
    return item.movie_cart.price;
  });

  const movieTotal = moviePrice.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  const roundedTotal = movieTotal.toFixed(2);

  const searchBarAppear =
    location.pathname === "/" || location.pathname === "/store";

  function navigateToCart() {
    navigate("/cart_items");
  }

  return (
    <div className="navbar bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="navbar-start">
        {user ? (
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn glass bg-slate-800 btn-circle hover:animate-pulse"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {user.type === "admin" ? (
                <li>
                  <NavLink to="/add_movie">Add Movie</NavLink>
                </li>
              ) : null}
              <li>
                <NavLink to="/reviews">View Reviews</NavLink>
              </li>
              <li>
                <NavLink to="/store">Go to Store</NavLink>
              </li>
            </ul>
          </div>
        ) : null}
        <div className="text-black mr-3 ml-3">
          {user ? <a>Hello, {user.username}!</a> : null}
        </div>
        <div className="btn btn-primary hover:animate-pulse">
          {user ? (
            <NavLink onClick={logOutUser} to="/login">
              Logout
            </NavLink>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </div>
      </div>
      <div className="navbar-center">
        {user ? (
          <Fade delay={500}>
            <button className="btn glass bg-slate-800 text-5xl hover:animate-pulse">
              <NavLink to="/">🎥 WebFlix 🎥</NavLink>
            </button>
          </Fade>
        ) : null}
      </div>
      <div className="navbar-end">
        {searchBarAppear && (
          <div className="form-control mr-2">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto glass bg-slate-800"
              onChange={onSearchText}
              value={searchText}
            />
          </div>
        )}
        <div className="flex-none">
          {user && cartItems.length > 0 ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">
                    {cartItems.length}
                  </span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">
                    {cartItems.length} Items
                  </span>
                  <span className="text-info">Subtotal: ${roundedTotal}</span>
                  <div className="card-actions">
                    <button
                      className="btn btn-primary btn-block"
                      onClick={navigateToCart}
                    >
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
