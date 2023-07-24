import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function ProductDescription({ name, id, description }) {
  return (
    <>
      <Box sx={{ textOverflow: "elipsis", overflow: "hidden" }}>
        <Typography component={Link} to={`/products/${id}`}>
          {name}
        </Typography>
        <Typography noWrap>{description}</Typography>
      </Box>
    </>
  );
}

ProductDescription.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string,
};
