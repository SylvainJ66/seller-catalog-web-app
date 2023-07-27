import { useParams } from "react-router-dom";
import { Page } from "@/ds/pages";
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import useProduct from "@/hooks/useProduct";
import { Edit, Favorite, FavoriteBorder } from "@mui/icons-material";
import { Price } from "@/ds/atom";
import ProductCondition from "@/products/ProductCondition";
import { FavoritesContext } from "@/contexts";

export default function ProductRoute() {
  const { id } = useParams();
  const { isLoading, data: product } = useProduct({ id });
  const { toggleFavorites, favoriteIds } = FavoritesContext.useContext();
  const isFavorite = favoriteIds.includes(id);

  if (isLoading) return <LinearProgress />;

  const productProperties = [
    { name: "Nom", value: product.name },
    { name: "Prix", value: product.price, type: "number", renderCell: Price },
    {
      name: "Condition",
      value: product.condition,
      renderCell: ProductCondition,
    },
  ];

  const defaultRenderCell = ({ value }) => value;

  return (
    <>
      <Page title={`ProductPage: ${product.name}`}>
        <Alert severity="success">
          <AlertTitle>
            Votre fiche produit a été enrichie avec succès !
          </AlertTitle>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci
          ex explicabo impedit maxime minima molestias natus neque nostrum omnis
          quaerat quo rem repellat repellendus, sed soluta unde velit vero?
        </Alert>
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", gap: 1, my: 2 }}
        >
          <Button
            variant="outlined"
            startIcon={isFavorite ? <Favorite /> : <FavoriteBorder />}
            onClick={() => toggleFavorites({ id })}
          >
            {isFavorite ? "Retirer des favoris" : "Ajouter au favoris"}
          </Button>
          <Button startIcon={<Edit />}>Editer</Button>
        </Box>

        <Box component="article" sx={{ display: "flex", gap: 2 }}>
          <img
            src={product.imageUrl}
            alt={product.name}
            width="300"
            height="300"
          />
          <TableContainer>
            <Table aria-label="fiche produit">
              <TableBody>
                {productProperties.map(
                  ({ name, value, type, renderCell = defaultRenderCell }) => (
                    <TableRow
                      key={name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ fontWeight: "bold" }}
                      >
                        {name}
                      </TableCell>
                      <TableCell
                        component="td"
                        scope="row"
                        align={type === "number" ? "right" : "left"}
                      >
                        {renderCell({ value })}
                      </TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Page>
    </>
  );
}
