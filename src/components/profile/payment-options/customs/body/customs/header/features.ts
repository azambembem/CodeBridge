import { useToast } from "@/hooks/use-toast";
import { useAxios } from "@/hooks/useAxios";
import type { AxiosResponse, MutationResult } from "@/types";
import type { PaymentForm, TPaymentOption } from "@/types/payment";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";

type ON_SUBMIT = MutationResult<PaymentForm>;

type HeaderFeatures = {
	onSubmit: ON_SUBMIT;
};

export const useHeaderFeatures = (): HeaderFeatures => {
	const axios = useAxios();
	const queryClient = useQueryClient();
	const { toast } = useToast();

	const onSubmit: ON_SUBMIT = useMutation({
		mutationFn: async (values) => {
			try {
				const { data } = await axios<TPaymentOption>({
					method: "POST",
					url: "/payment-options",
					data: values,
				});

				queryClient.setQueryData<TPaymentOption[]>(
					["payment-options"],
					(payment_options) => {
						if (!payment_options) return;

						return [...payment_options, data.data];
					},
				);

				toast({
					title: "Hurray!",
					description: "Your option has been added successfully!",
					duration: 3000,
				});
			} catch (error) {
				const { response } = error as AxiosError<AxiosResponse>;

				toast({
					title: "Something went wrong!",
					description: `${response?.data?.message}`,
					variant: "destructive",
				});
			}
		},
	});

	return {
		onSubmit,
	};
};
