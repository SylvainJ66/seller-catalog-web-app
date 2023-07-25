import { createBrowserRouter } from "react-router-dom";
import MainTemplate from "@/ds/templates/MainTemplate";
import ProductsRoute from "@/products/ProductsRoute/index.js";
import ProductRoute from "@/products/ProductRoute/index.js";
import OrdersRoute from "@/orders/OrdersRoute/index.js";
import { Page } from "@/ds/pages/index.js";

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
