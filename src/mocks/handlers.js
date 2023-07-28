import { rest } from "msw";

const apiPath = (route) => `${import.meta.env.VITE_API_URL}${route}`;

export const handlers = [
  rest.get(apiPath("/products/:id"), (req, res, ctx) => {
    const { id } = req.params;
    return res(
      ctx.status(200),
      ctx.json({ id, name: "Product Name", price: 42.99 })
    );
  }),
];
