import { createBrowserRouter } from "react-router-dom";
import MainTemplate from "@/ds/templates/MainTemplate";
import OrdersPage from "@/orders/OrdersPage";
import ProductPage from "@/products/ProductPage";
import ProductsPage from "@/products/ProductsPage/index.js";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainTemplate />,
    children: [
      {
        index: true,
        element: <ProductsPage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "products/:id",
        element: <ProductPage />,
      },
      {
        path: "orders",
        element: <OrdersPage />,
      },
      {
        path: "financial",
        element: <div>Finance</div>,
      },
      {
        path: "messages",
        element: <div>Messages</div>,
      },
      {
        path: "marketPlaces",
        element: <div>Marketplaces</div>,
      },
    ],
  },
]);
