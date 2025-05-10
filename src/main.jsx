import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Root/Root.jsx";
import Home from "./Pages/Home.jsx";
import Details from "./Components/Details.jsx";
import Cart from "./Components/Cart.jsx";
import Favorites from "./Components/Favorites.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <p>Error....</p>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/phones.json"),
        hydrateFallbackElement: <p>Loading...</p>,
      },
      {
        path: "phone/:id",
        Component: Details,
        loader: () => fetch("/phones.json"),
        hydrateFallbackElement: <p>Loading..</p>,
      },
      {
        path: "cart",
        Component: Cart,
      },
      {
        path: "favorites",
        Component: Favorites,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
