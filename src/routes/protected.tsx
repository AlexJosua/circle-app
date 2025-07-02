import type { RouteObject } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Follows from "../pages/Follows";
import Search from "../pages/Search";
import ProtectedRoute from "../components/protectedRoutes";
import PostCommentsPage from "@/pages/PostCommentsPage";
import UserProfile from "@/pages/OtherProfile";

const protectedRoutes: RouteObject = {
  path: "/",
  element: (
    <ProtectedRoute>
      <MainLayout />
    </ProtectedRoute>
  ),
  children: [
    {
      path: "",
      element: <Home />,
    },
    {
      path: "profile",
      element: <Profile />,
    },
    {
      path: "follows",
      element: <Follows />,
    },
    {
      path: "search",
      element: <Search />,
    },
    {
      path: "post/:id",
      element: <PostCommentsPage />,
    },
    {
      path: "profile/:username",
      element: <UserProfile />,
    },
  ],
};

export default protectedRoutes;
