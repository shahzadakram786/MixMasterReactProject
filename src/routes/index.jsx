import { createBrowserRouter } from "react-router-dom";
import Home from "../page/home/Home";
import About from "../page/about/About";
import OurNews from "../page/ourNewsletter/OurNews";
import Error from "../page/404/Error";
import Layout from "../components/layout/Layout";
import Singleproduct from "../components/singleProduct/Singleproduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "ourNews", element: <OurNews /> },
      { path: "/:id", element: <Singleproduct /> },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default router;
