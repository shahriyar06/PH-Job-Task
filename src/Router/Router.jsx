import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Page/Home/Home";
import Product from "../Page/Product/Product";
import Login from "../Componenet/Login/Login";
import Register from "../Componenet/Register/Register";
import PrivateRoute from "../Componenet/PrivateRoute/PrivateRoute";


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
              element: <PrivateRoute><Product></Product></PrivateRoute>
            },
            {
              path: "/login",
              element: <Login></Login>
            },
            {
              path: "/register",
              element: <Register></Register>
            }
          ],
    },
]);

export default router;