import { Box, LinearProgress } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import ProductImage from "@/products/ProductImage";
import ProductPrice from "@/products/ProductPrice";
import ProductCondition from "@/products/ProductCondition/index.js";
import { withRow } from "@/hoc/index.js";
import useProducts from "@/hooks/useProducts/index.js";

const columns = [
  {
    field: "imageUrl",
    headerName: "Image",
    renderCell: withRow(ProductImage),
  },
  {
    field: "productDescription",
    headerName: "Produit",
    valueGetter: ({ row }) => `${row.name} ${row.description}`,
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

export default function ProductsPage() {
  const { isLoading, data: products } = useProducts();

  if (isLoading)
    return (
      <>
        <LinearProgress />
        <div>Loading...</div>
      </>
    );

  return (
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
  );
}
