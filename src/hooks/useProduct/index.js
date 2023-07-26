import { useQuery } from "@tanstack/react-query";
import { httpClient } from "@/api";

export default function useProduct({ id }) {
  return useQuery({
    queryKey: ["products", id],
    queryFn: async () => {
      return await httpClient.get(`products/${id}`).json();
    },
  });
}
