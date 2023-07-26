import { Page } from "@/ds/pages";
import { DataGrid } from "@mui/x-data-grid";
import { productColumns } from "@/products/productColumns.js";
import { FavoritesContext } from "@/contexts";
import { LinearProgress } from "@mui/material";
import useProductsByIds from "@/hooks/useProductsByIds";

export default function FavoritesRoute() {
  const { favoriteIds } = FavoritesContext.useContext();
  const { isLoading, data: products } = useProductsByIds({ ids: favoriteIds });
  if (isLoading) return <LinearProgress />;

  return (
    <Page title="Favoris">
      <DataGrid
        rows={products}
        columns={productColumns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 15,
            },
          },
        }}
        pageSizeOptions={[15]}
        disableRowSelectionOnClick
        autoHeight
      />
    </Page>
  );
}
