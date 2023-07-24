import { oneOf } from "prop-types";
import withRow from "@/hoc/withRow.jsx";

function ProductCondition({ condition }) {
  return condition === "used" ? "Occasion" : "Neuf";
}

ProductCondition.propTypes = {
  condition: oneOf(["used", "new"]),
};

const RowProductCondition = withRow(ProductCondition);
export default RowProductCondition;
