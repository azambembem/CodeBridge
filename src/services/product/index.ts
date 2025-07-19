import { useAxios } from "@/hooks/useAxios";
import type { QueryResult } from "@/types";
import type { ICategory, IProduct } from "@/types/home";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

type ProductCache = {
	product: QueryResult<IProduct & {category: ICategory }>;
};

export const useProductCache = (): ProductCache => {
	const axios = useAxios();
	const { product_id } = useParams();

	const product = useQuery({
		queryKey: [`products/${product_id}`],
		queryFn: async () => {
			const { data } = await axios<IProduct & {category: ICategory } >({
				method: "GET",
				url: `/products/${product_id}`,
			});

			return data?.data;
		},
	});

	return {
		product,
	};
};
