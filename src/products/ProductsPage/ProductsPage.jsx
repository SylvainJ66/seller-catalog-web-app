import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import db from "../../db.json";
import ProductImage from "@/products/ProductImage";
import ProductPrice from "@/products/ProductPrice";
import ProductCondition from "@/products/ProductCondition/index.js";
import { withRow } from "@/hoc/index.js";

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

const rows = db.products;

export default function ProductsPage() {
  return (
    <Box sx={{ height: "800%", width: "100%" }}>
      <DataGrid
        rows={rows}
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
