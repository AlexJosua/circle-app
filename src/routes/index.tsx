import { createBrowserRouter } from "react-router-dom";
import protectedRoutes from "./protected";
import publicRoutes from "./auth";

const router = createBrowserRouter([protectedRoutes, ...publicRoutes]);

export default router;
