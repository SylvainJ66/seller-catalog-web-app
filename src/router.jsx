import { createBrowserRouter } from "react-router-dom";
import Template from "@/Template/index.jsx";
import ProductsPage from "@/products/ProductsPage/index.jsx";
import OrdersPage from "@/orders/OrdersPage/index.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
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
