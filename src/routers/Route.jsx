import { createBrowserRouter } from "react-router-dom";
import Root from "../routers/Root";
import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Contact from "../components/pages/Contact";
import Product from "../components/pages/Product";
import Blog from "../components/pages/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "about",
        Component: About
      },
      {
        path: "contact",
        Component: Contact
      },
      {
        path: "product",
        Component: Product
      },
      {
        path: "blog",
        Component: Blog
      }
    ]
  }
]);
export default router;
