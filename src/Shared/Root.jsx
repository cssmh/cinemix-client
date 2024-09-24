import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import ErrorPage from "../Component/ErrorPage";
import Home from "../Component/Home";
import Login from "../Component/Login";
import Register from "../Component/Register";
import PrivateRoute from "./PrivateRoute";
import AddProduct from "../Component/AddProduct";
import MyCart from "../Pages/MyCart";
import TypeMovies from "../Component/TypeMovies";
import CineUpdate from "../Component/CineUpdate";
import MovieDetails from "../Component/MovieDetails";
import MyProfile from "../Component/MyProfile";
import { getMovieDetails, getTypeMovies } from "../Api/movie";
import AllMovies from "../Pages/AllMovies";
import ShowTime from "../Pages/ShowTime";
import TopRated from "../Pages/TopRated";

const Root = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      {
        path: "/all-movies",
        element: (
          <PrivateRoute>
            <AllMovies />
          </PrivateRoute>
        ),
      },
      { path: "/show-time", element: <ShowTime /> },
      { path: "/top-rated", element: <TopRated /> },
      {
        path: "/add-movie",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-cart",
        element: (
          <PrivateRoute>
            <MyCart />
          </PrivateRoute>
        ),
      },
      {
        path: "/category/:type",
        element: <TypeMovies />,
        loader: ({ params }) => getTypeMovies(params.type),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <CineUpdate />
          </PrivateRoute>
        ),
        loader: ({ params }) => getMovieDetails(params.id),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <MovieDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) => getMovieDetails(params.id),
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Root;
