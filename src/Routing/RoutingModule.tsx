import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../components/Login/Login";
import Signup from "../components/SignUp/Signup";
import Dashboard from "../components/DashBoard/Dashboard";
import BookContainer from "../components/BookContainer/BookContainer";
import BookDetail from "../components/BookDetails/Bookdetail";
import ForgetPassword from "../components/ForgetPassword/ForgetPassword";
import BookList from "../components/BookWishList/BookWishList";
import LoginWishList from "../components/BookWishList/LoginWishlist";
import OrderPlaced from "../components/OrderPlaced/OrderPlaced";
import Cart from "../components/Cart/Cart";
import MyOrders from "../components/MyOrders/MyOrders";
import ProfileForm from "../components/Profile/Profile";


const RoutingModule: React.FC = () => {
    const route = createBrowserRouter([
        {
          path: "",
          element:<Login />,
        },
        {
          path: "/signup",
          element:<Signup />,
        },
        {
          path: "/forget",
          element:<ForgetPassword />,
        },
        {
          path: "/dashboard",
          element: (
                <Dashboard />
        ),
        children: [
            {
              path: "books",
              element: <BookContainer />,
            },
            {
              path: "books/:id",
              element: <BookDetail />,
            },
            {
              path: "profile",
              element: <ProfileForm />,
            },
            {
              path: "wishlist",
              element: <BookList />,
            },
            {
              path: "wish",
              element: <LoginWishList />,
            },
            {
              path: "cart",
              element: <Cart />,
            },
            {
              path: "myOrders",
              element: <MyOrders />,
            },
            {
              path: "orderplaced",
              element: <OrderPlaced />,
            },
          ],
        },
      ]);
    
      return <RouterProvider router={route} />;
};

export default RoutingModule;