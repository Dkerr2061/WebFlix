import React from "react";
import App from "./components/App";
import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieList from "./components/MovieList";
import ErrorPage from "./pages/ErrorPage";
import AddMovie from "./pages/AddMovie";
import MovieDetail from "./pages/MovieDetail";
import ReviewList from "./components/ReviewList";
import AddReview from "./pages/AddReview";
import UpdateReview from "./pages/UpdateReview";
import StoreList from "./components/StoreList";
import CartList from "./components/CartList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MovieList />,
      },
      {
        path: "/add_movie",
        element: <AddMovie />,
      },
      {
        path: "/movies/:id",
        element: <MovieDetail />,
      },
      {
        path: "/reviews",
        element: <ReviewList />,
      },
      {
        path: "/add_review",
        element: <AddReview />,
      },
      {
        path: "/reviews/:id",
        element: <UpdateReview />,
      },
      {
        path: "/store",
        element: <StoreList />,
      },
      {
        path: "/cart_items",
        element: <CartList />,
      },
    ],
  },
]);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={router} />);
