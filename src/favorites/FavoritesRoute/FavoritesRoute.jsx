import { Page } from "@/ds/pages";
import { DataGrid } from "@mui/x-data-grid";
import { productColumns } from "@/products/productColumns.js";
import { useReducer } from "react";

export default function FavoritesRoute() {
  const [products] = useReducer(() => {}, []);

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
