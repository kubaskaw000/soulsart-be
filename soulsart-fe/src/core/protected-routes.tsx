import { Route } from "./route-type";
import { useRoutes } from "react-router-dom";

export const protectedRoutes: Route[] = [
  { path: "*", element: <div>404 Page Not Found</div> },
  {
    path: "/",
    element: <div>UserProfile</div>,
  },
];

export const ProtectedRouter = () => {
  return useRoutes(protectedRoutes);
};
