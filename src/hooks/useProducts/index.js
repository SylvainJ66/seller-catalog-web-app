import { useQuery } from "@tanstack/react-query";
import { httpClient } from "@/api";

export default function useProducts() {
  return useQuery(
    ["products"],
    async () => await httpClient.get("products").json()
  );
}
