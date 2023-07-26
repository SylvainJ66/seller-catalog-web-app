import { withRow } from "@/hoc/index.js";
import ProductImage from "@/products/ProductImage/index.js";
import ProductDescription from "@/products/ProductDescription/index.js";
import ProductCondition from "@/products/ProductCondition/index.js";
import ProductPrice from "@/products/ProductPrice/index.js";
import ProductActions from "@/products/ProductActions/index.js";

export const productColumns = [
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
  {
    field: "actions",
    headerName: "-",
    sortable: false,
    renderCell: withRow(ProductActions),
  },
];
