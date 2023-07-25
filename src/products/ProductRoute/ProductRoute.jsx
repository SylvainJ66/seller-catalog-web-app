import { useParams } from "react-router-dom";
import { Page } from "@/ds/pages/index.js";

export default function ProductRoute() {
  const { id } = useParams();
  return <Page title={`ProductPage: ${id}`}></Page>;
}
