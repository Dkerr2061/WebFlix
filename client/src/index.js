import React from "react";
import App from "./components/App";
import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieList from "./components/MovieList";
import ErrorPage from "./pages/ErrorPage";
import AddMovie from "./pages/AddMovie";
import MovieDetail from "./pages/MovieDetail";

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
    ],
  },
]);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={router} />);
