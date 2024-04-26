import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  const [movies, setMovies] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // Movie data and functions start here:

  useEffect(() => {
    fetch("/movies")
      .then((res) => res.json())
      .then((movieData) => setMovies(movieData));
  }, []);

  function addMovie(movieData) {
    fetch("/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movieData),
    }).then((res) => {
      if (res.ok) {
        res.json().then((newMovieData) => {
          setMovies([...movies, newMovieData]);
          navigate("/");
        });
      } else if (res.status === 400) {
        res.json().then((errorData) => alert(`Error: ${errorData}`));
      } else {
        res.json().then(() => alert("Error: Something went wrong."));
      }
    });
  }

  function updateMovie(id, updatedMovie) {
    fetch(`/movies/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedMovie),
    }).then((res) => {
      if (res.ok) {
        res.json().then((updatedMovieData) => {
          setMovies((movies) =>
            movies.map((movie) => {
              if (movie.id === updatedMovieData.id) {
                return updatedMovieData;
              } else {
                return movie;
              }
            })
          );
        });
      } else if (res.status === 400) {
        res.json().then((errorData) => {
          alert(`Error ${errorData.error}`);
        });
      }
    });
  }

  function deleteMovie(id) {
    fetch(`/movies/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        setMovies((movies) =>
          movies.filter((movie) => {
            return movie.id !== id;
          })
        );
      } else if (res.status === 400) {
        res.json().then((errorData) => {
          alert(`Error ${errorData.error}`);
        });
      }
    });
  }

  // Movie functions and data end here

  // Review functions and data start here:

  useEffect(() => {
    fetch("/reviews")
      .then((res) => res.json())
      .then((reviewData) => setReviews(reviewData));
  }, []);

  function addReview(newReview) {
    fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    }).then((res) => {
      if (res.ok) {
        res
          .json()
          .then((newReviewData) => setReviews([...reviews, newReviewData]));
      } else if (res.status === 400) {
        res.json().then((errorData) => alert(`Error: ${errorData.error}`));
      }
    });
  }

  function updateReview(id, reviewDataToBeUpdated) {
    fetch(`/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewDataToBeUpdated),
    }).then((res) => {
      if (res.ok) {
        res.json().then((updatedReviewData) => {
          setReviews((reviews) =>
            reviews.map((review) => {
              if (review.id === updatedReviewData.id) {
                return updatedReviewData;
              } else {
                return review;
              }
            })
          );
        });
      } else if (res.status === 400) {
        res.json().then((errorData) => alert(`Error: ${errorData.error}`));
      }
    });
  }

  function deleteReview(id) {
    fetch(`/reviews/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        setReviews((reviews) =>
          reviews.filter((review) => {
            return review.id !== id;
          })
        );
      } else if (res.status === 400) {
        res.json().then((errorData) => alert(`Error: ${errorData.error}`));
      }
    });
  }

  //  Review Functions and data end here

  // CartItems and Store Functions start here:

  useEffect(() => {
    fetch("/cart_items").then((res) => {
      if (res.ok) {
        res.json().then((cartItemData) => setCartItems(cartItemData));
      } else if (res.status === 400) {
        res.json().then((errorData) => console.log(errorData.error));
      }
    });
  }, []);

  // CartItems and Store Functions end here

  // User Functions and data start here:

  useEffect(() => {
    fetch("/users").then((res) => {
      if (res.ok) {
        res.json().then((userData) => setUsers(userData));
      } else if (res.status === 400) {
        res.json().then((errorData) => console.log(errorData));
      }
    });
  }, []);

  return (
    <div>
      <NavBar />
      <Outlet
        context={{
          movies: movies,
          addMovie,
          updateMovie,
          deleteMovie,
          reviews: reviews,
          addReview,
          updateReview,
          deleteReview,
          cartItems: cartItems,
          users: users,
        }}
      />
    </div>
  );
}

export default App;
