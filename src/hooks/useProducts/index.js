import { useQuery } from "@tanstack/react-query";
import { httpClient } from "@/api";

export default function useProducts({ search }) {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      return await httpClient.get(`products?q=${search}`).json();
    },
    refetchOnWindowFocus: false,
  });
}
