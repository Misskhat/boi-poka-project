import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import BookDetailes from "../Pages/BookDetailes/BookDetailes";

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
            element: <Home />,
            
        },
        {
          path: "/about",
          element: <About />

        },
        {
          path: "/bookdetailes/:id",
          element: <BookDetailes></BookDetailes>
        }
    ]
  },
]);