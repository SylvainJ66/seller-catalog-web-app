import { number } from "prop-types";
import ProductCondition from "@/products/ProductCondition/index.js";
import { withRow } from "@/hoc/index.js";

function ProductPrice({ price }) {
  return new Intl.NumberFormat(window.navigator.language, {
    style: "currency",
    currency: "EUR",
  }).format(price);
}

ProductCondition.propTypes = {
  price: number,
};

const RowProductPrice = withRow(ProductPrice);
export default RowProductPrice;
