import { createBrowserRouter } from "react-router-dom";
import Template from "@/Template/index.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
      {
        index: true,
        element: <div>Produits</div>,
      },
      {
        path: "orders",
        element: <div>Commandes</div>,
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
