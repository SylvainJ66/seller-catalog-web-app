import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { LargeField } from "@/ds/atom";

export default function ProductDescription({ name, id, description }) {
  return (
    <LargeField>
      <Typography component={Link} to={`/products/${id}`}>
        {name}
      </Typography>
      <Typography noWrap>{description}</Typography>
    </LargeField>
  );
}

ProductDescription.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string,
};
