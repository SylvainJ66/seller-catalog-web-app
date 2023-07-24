import { string } from "prop-types";
import withRow from "@/hoc/withRow.jsx";

function ProductImage({ name, imageUrl }) {
  return <img src={imageUrl} alt={name} />;
}

ProductImage.propTypes = {
  imageUrl: string,
  name: string,
};

const RowProductImage = withRow(ProductImage);
export default RowProductImage;
