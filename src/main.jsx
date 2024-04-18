import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import AuthProvider from "./provider/AuthProvider";
import ErrorPage from "./components/errorPage/ErrorPage";
import { HelmetProvider } from "react-helmet-async";
import EstateDetails from "./components/Home/EstateDetails";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import UserInformation from "./components/userInformation/UserInformation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader:()=> fetch('fakeData.json'),
        element: <Home></Home>,
      },
      {
        path:"/estateDetails/:id",
        element:<PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path:"/userInformation",
        element:<PrivateRoute><UserInformation></UserInformation></PrivateRoute>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <HelmetProvider>
    <AuthProvider>
     
        <RouterProvider router={router} />
      
    </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
