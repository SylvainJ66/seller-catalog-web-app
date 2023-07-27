import { Edit, Favorite, FavoriteBorder } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { string } from "prop-types";
import { FavoritesContext } from "@/contexts/index.js";

export default function ProductActions({ id }) {
  const { toggleFavorites, favoriteIds } = FavoritesContext.useContext();
  const isFavorite = favoriteIds.includes(id);

  return (
    <>
      <IconButton component={Link} to={`/products/${id}`}>
        <Edit />
      </IconButton>
      <IconButton onClick={() => toggleFavorites({ id })}>
        {isFavorite ? <Favorite /> : <FavoriteBorder />}
      </IconButton>
    </>
  );
}

ProductActions.propTypes = {
  id: string,
};
