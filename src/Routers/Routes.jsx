import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
        {
            index: true,
            loader: ()=> fetch("booksData.json"),
            path: "/",
            element: <Home />
        },
    ]
  },
]);