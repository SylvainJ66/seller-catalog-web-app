import { number, shape } from "prop-types";
import ProductCondition from "@/products/ProductCondition/index.js";

export default function ProductPrice({ row }) {
  return new Intl.NumberFormat(window.navigator.language, {
    style: "currency",
    currency: "EUR",
  }).format(row.price);
}

ProductCondition.propTypes = {
  row: shape({
    price: number,
  }),
};
