import { number, oneOf } from "prop-types";

export default function Price({ value, currency: currency = "EUR" }) {
  return new Intl.NumberFormat(window.navigator.language, {
    style: "currency",
    currency,
  }).format(value);
}

Price.prototype = {
  value: number,
  currency: oneOf(["EUR", "USD"]),
};
