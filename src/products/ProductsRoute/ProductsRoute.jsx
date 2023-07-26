import {
  Box,
  Button,
  InputAdornment,
  LinearProgress,
  TextField,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import useProducts from "@/hooks/useProducts";
import Page from "@/ds/pages/Page";
import { Search } from "@mui/icons-material";
import { useSearch } from "@/hooks";
import { productColumns } from "@/products/productColumns.js";

export default function ProductsRoute() {
  const [searchTerm, { onSearchChange, searchSubmit }] = useSearch();
  const {
    isLoading,
    data: products,
    refetch,
  } = useProducts({ search: searchTerm });

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
        <Box
          sx={{ ml: 21, pb: 8 }}
          component="form"
          onSubmit={searchSubmit(refetch)}
        >
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
            value={searchTerm}
            onChange={onSearchChange}
            autoComplete="off"
          />
          <Button onClick={searchSubmit(refetch)} sx={{ ml: 1 }}>
            Rechercher
          </Button>
        </Box>
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
    </>
  );
}
