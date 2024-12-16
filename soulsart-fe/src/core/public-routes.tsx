import { Route } from "./route-type";
import { DefaultLayout } from "../layouts/default-layout/default-layout";
import { SingleArtPage } from "../layouts/single-art-page/single-art-page";
import { LoginPage } from "../views/login-page/login-page";
import { useRoutes } from "react-router-dom";

const publicRoutes: Route[] = [
  { path: "*", element: <div>404 Page Not Found</div> },
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/art/:id",
        element: <SingleArtPage />,
      },
    ],
  },
  { path: "/login", element: <LoginPage /> },
];

export const PublicRouter = () => {
  return useRoutes(publicRoutes);
};
