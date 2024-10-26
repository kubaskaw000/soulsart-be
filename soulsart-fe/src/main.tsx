import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store.ts";
import "./index.css";
import { LoginPage } from "./views/login-page/login-page.tsx";
import { SingleArtPage } from "./layouts/single-art-page/single-art-page.tsx";
import { DefaultLayout } from "./layouts/default-layout/default-layout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <DefaultLayout /> },
      {
        path: "/art/:id",
        element: <SingleArtPage />,
      },
    ],
  },
  { path: "/login", element: <LoginPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
