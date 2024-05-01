import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBook from "../dashboard/ManageBook";
import EditBook from "../dashboard/EditBook";
import SingleBook from "../shop/SingleBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },{
        path: "/book/:id",
        element: <SingleBook/>,
        loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
      }
      
    ],
  },
  /*{
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/", // Consider renaming this path if it's meant to be a dashboard overview
        element: <Dashboard />,
      },
      {
        path: "/upload",
        element: <UploadBook />,
      },
      {
        path: "/manage",
        element: <ManageBook />,
      },
      {
        path: "/edit-book/:id",
        element: <EditBook />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/all-books/${params.id}`).then((response) =>response.json()),
      },
    ],
  },*/
]);

export default router;
