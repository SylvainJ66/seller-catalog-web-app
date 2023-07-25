import { useQuery } from "@tanstack/react-query";
import { httpClient } from "@/api";

export default function useProducts({ search }) {
  return useQuery(
    ["products"],
    async () => await httpClient.get(`products?q=${search}`).json()
  );
}
