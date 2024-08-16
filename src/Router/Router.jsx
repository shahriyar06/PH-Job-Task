import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Page/Home/Home";
import Product from "../Page/Product/Product";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
              path: "/",
              element: <Home></Home>
            },
            {
              path: "/product",
              element: <Product></Product>
            }
          ],
    },
]);

export default router;