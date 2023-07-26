import { createBrowserRouter } from "react-router-dom";
import MainTemplate from "@/ds/templates/MainTemplate";
import ProductsRoute from "@/products/ProductsRoute";
import ProductRoute from "@/products/ProductRoute";
import OrdersRoute from "@/orders/OrdersRoute/";
import { Page } from "@/ds/pages";
import FavoritesRoute from "@/favorites/FavoritesRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainTemplate />,
    children: [
      {
        index: true,
        element: <ProductsRoute />,
      },
      {
        path: "products",
        element: <ProductsRoute />,
      },
      {
        path: "products/:id",
        element: <ProductRoute />,
      },
      {
        path: "favorites",
        element: <FavoritesRoute />,
      },
      {
        path: "orders",
        element: <OrdersRoute />,
      },
      {
        path: "financial",
        element: <Page title="Finance"></Page>,
      },
      {
        path: "messages",
        element: <Page title="Messages"></Page>,
      },
      {
        path: "marketPlaces",
        element: <Page title="MarketPlaces"></Page>,
      },
    ],
  },
]);
