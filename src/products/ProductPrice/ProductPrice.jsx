import { number } from "prop-types";
import { withRow } from "@/hoc/index.js";
import { Price } from "@/ds/atom/index.js";

function ProductPrice({ price }) {
  return <Price value={price} />;
}

ProductPrice.propTypes = {
  price: number,
};

const RowProductPrice = withRow(Price);
export default RowProductPrice;
