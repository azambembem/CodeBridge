import { useAxios } from "@/hooks/useAxios";
import type { QueryResult } from "@/types";
import type { TPurchase } from "@/types/purchase";
import { useQuery } from "@tanstack/react-query";

type PurchaseCache = {
	purchase: QueryResult<TPurchase[]>;
};

export const usePurchaseCache = (): PurchaseCache => {
	const axios = useAxios();

	const purchase = useQuery({
		queryKey: ["purchase"],
		queryFn: async () => {
			const { data } = await axios<TPurchase[]>({
				method: "GET",
				url: "/purchase",
			});

			return data?.data;
		},
	});

	return { purchase };
};
