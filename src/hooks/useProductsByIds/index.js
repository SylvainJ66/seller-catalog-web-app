import { useQuery } from "@tanstack/react-query";
import { httpClient } from "@/api";

export default function useProductsByIds({ ids }) {
  const searchParams = new URLSearchParams();
  ids.forEach((id) => searchParams.append("id", id));

  return useQuery({
    queryKey: ["products", ...ids],
    queryFn: async () =>
      ids.length > 0
        ? await httpClient.get(`products`, { searchParams }).json()
        : [],
  });
}
