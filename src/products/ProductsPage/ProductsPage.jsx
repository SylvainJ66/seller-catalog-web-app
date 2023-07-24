import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import ProductImage from "@/products/ProductImage";
import ProductPrice from "@/products/ProductPrice";
import ProductCondition from "@/products/ProductCondition/index.js";
import { withRow } from "@/hoc/index.js";
import { useEffect, useState } from "react";

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
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch("http://localhost:3001/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProduct();
  }, []);

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
