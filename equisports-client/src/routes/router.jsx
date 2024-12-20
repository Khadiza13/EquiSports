import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import AddProduct from "../Pages/AddProduct";
import Products from "../components/Products";
import Details from "../Pages/Details";
import Update from "../Pages/Update";
import AllEquip from "../Pages/AllEquip";
import Categories from "../components/Categories";
import AuthLayout from "../Layouts/AuthLayout";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import MyEquipment from "../Pages/MyEuipment";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <Products></Products>,
            loader: () =>
              fetch("https://equisports-server-eight.vercel.app/product"),
          },
          {
            path: "/",
            element: <Categories></Categories>,
          },
        ],
      },
      {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
          {
            path: "/auth/login",
            element: <Login></Login>,
          },
          {
            path: "/auth/register",
            element: <Register></Register>,
          },
        ],
      },
      {
        path: "/all",
        element: <AllEquip></AllEquip>,
        loader: () => fetch("https://equisports-server-eight.vercel.app/all"),
      },
      {
        path: "/product/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://equisports-server-eight.vercel.app/product/${params.id}`
          ),
      },
      {
        path: "/add",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/product/:id/update",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://equisports-server-eight.vercel.app/product/${params.id}`
          ),
      },
      {
        path: "/myEquipment",
        element: (
          <PrivateRoute>
            <MyEquipment></MyEquipment>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
