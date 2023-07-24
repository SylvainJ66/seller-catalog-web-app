import { string } from "prop-types";
export default function ProductImage({ name, imageUrl }) {
  return <img src={imageUrl} alt={name} />;
}

ProductImage.propTypes = {
  imageUrl: string,
  name: string,
};
