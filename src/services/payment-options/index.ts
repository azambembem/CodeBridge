import { useAxios } from "@/hooks/useAxios";
import type { QueryResult } from "@/types";
import type { TPaymentOption } from "@/types/payment";
import { useQuery } from "@tanstack/react-query";

type PaymentOptionsCache = {
	payment_options: QueryResult<TPaymentOption[]>;
};

export const usePaymentOptionsCache = (): PaymentOptionsCache => {
	const axios = useAxios();

	const payment_options = useQuery({
		queryKey: ["payment-options"],
		queryFn: async () => {
			const { data } = await axios<TPaymentOption[]>({
				method: "GET",
				url: "/payment-options",
			});

			return data?.data;
		},
	});

	return {
		payment_options,
	};
};
