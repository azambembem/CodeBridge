import { useAxios } from "@/hooks/useAxios";
import type { QueryResult } from "@/types";
import type { IProduct } from "@/types/home";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

type ProductCache = {
	product: QueryResult<IProduct>;
};

export const useProductCache = (): ProductCache => {
	const axios = useAxios();
	const { product_id } = useParams();

	const product = useQuery({
		queryKey: [`product/${product_id}`],
		queryFn: async () => {
			const { data } = await axios<IProduct >({
				method: "GET",
				url: `/product/${product_id}`,
			});

			return data?.data;
		},
	});

	return {
		product,
	};
};
