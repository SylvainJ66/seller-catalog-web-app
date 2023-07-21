import { createBrowserRouter } from "react-router-dom";
import MainTemplate from "@/ds/templates/MainTemplate";
import ProductsPage from "@/products/ProductsPage";
import OrdersPage from "@/orders/OrdersPage";

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
