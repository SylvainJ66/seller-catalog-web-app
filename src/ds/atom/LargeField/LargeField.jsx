import { Box } from "@mui/material";
import { node } from "prop-types";
export default function LargeField({ children }) {
  return (
    <Box sx={{ textOverflow: "elipsis", overflow: "hidden" }}>{children}</Box>
  );
}

LargeField.propTypes = {
  children: node,
};
