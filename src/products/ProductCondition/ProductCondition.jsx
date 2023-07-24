import { oneOf } from "prop-types";

export default function ProductCondition({ condition }) {
  return condition === "used" ? "Occasion" : "Neuf";
}

ProductCondition.propTypes = {
  condition: oneOf(["used", "new"]),
};
