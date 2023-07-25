import {
  Box,
  Button,
  InputAdornment,
  LinearProgress,
  TextField,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import ProductImage from "@/products/ProductImage";
import ProductPrice from "@/products/ProductPrice";
import ProductCondition from "@/products/ProductCondition/index.js";
import { withRow } from "@/hoc/index.js";
import useProducts from "@/hooks/useProducts/index.js";
import ProductDescription from "@/products/ProductDescription/index.js";
import Page from "@/ds/pages/Page/index.js";
import { Search } from "@mui/icons-material";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

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
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const { isLoading, data: products, refetch } = useProducts({ search });
  const handleChange = (event) => {
    setSearch(event.currentTarget.value);
  };

  if (isLoading)
    return (
      <>
        <LinearProgress />
        <div>Loading...</div>
      </>
    );

  return (
    <>
      <Page title="Gestion du catalogue">
        <Box sx={{ ml: 21, pb: 8 }}>
          <TextField
            placeholder="Recherche par GTIN ou SKU"
            id="input-with-icon-textfield"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            sx={{ width: "630px" }}
            value={search}
            onChange={handleChange}
            autoComplete="off"
          />
          <Button
            onClick={() => {
              setSearchParams({ q: search });
              refetch();
            }}
            sx={{ ml: 1 }}
          >
            Rechercher
          </Button>
        </Box>
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
      </Page>
    </>
  );
}
