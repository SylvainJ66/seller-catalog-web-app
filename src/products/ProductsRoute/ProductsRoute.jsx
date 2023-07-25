import { Box, LinearProgress } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import ProductImage from "@/products/ProductImage";
import ProductPrice from "@/products/ProductPrice";
import ProductCondition from "@/products/ProductCondition/index.js";
import { withRow } from "@/hoc/index.js";
import useProducts from "@/hooks/useProducts/index.js";
import ProductDescription from "@/products/ProductDescription/index.js";
import Page from "@/ds/pages/Page/index.js";

const columns = [
  {
    field: "imageUrl",
    headerName: "Image",
    renderCell: withRow(ProductImage),
  },
  {
    field: "productDescription",
    flex: 1,
    headerName: "Produit",
    renderCell: withRow(ProductDescription),
  },
  {
    field: "condition",
    headerName: "Condition",
    renderCell: withRow(ProductCondition),
  },
  {
    field: "price",
    headerName: "Prix",
    type: "number",
    renderCell: withRow(ProductPrice),
  },
  { field: "stock", headerName: "Stock", typeNumber: true },
];

export default function ProductsRoute() {
  const { isLoading, data: products } = useProducts();

  if (isLoading)
    return (
      <>
        <LinearProgress />
        <div>Loading...</div>
      </>
    );

  return (
    <>
      <Page title="Gestion du catalogue"></Page>
      <Box sx={{ height: "100%", width: "100%" }}>
        <DataGrid
          rows={products}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 15,
              },
            },
          }}
          pageSizeOptions={[15]}
          disableRowSelectionOnClick
        />
      </Box>
    </>
  );
}
