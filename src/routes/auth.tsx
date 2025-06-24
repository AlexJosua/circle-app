import type { RouteObject } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Forgot from "../pages/auth/Forgot";
import Reset from "../pages/auth/Reset";

const publicRoutes: RouteObject[] = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgot",
    element: <Forgot />,
  },
  {
    path: "/reset",
    element: <Reset />,
  },
];

export default publicRoutes;
