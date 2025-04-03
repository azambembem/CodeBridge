import { useToast } from "@/hooks/use-toast";
import { useAxios } from "@/hooks/useAxios";
import type { AxiosResponse, MutationResult } from "@/types";
import type { PaymentForm, TPaymentOption } from "@/types/payment";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";

type ON_DELETE = MutationResult<TPaymentOption>;
type ON_EDIT = MutationResult<PaymentForm & TPaymentOption>;

type CardFeatures = {
	onDelete: ON_DELETE;
	onEdit: ON_EDIT;
};

export const useCardFeatures = (): CardFeatures => {
	const queryClient = useQueryClient();
	const axios = useAxios();

	const { toast } = useToast();

	const onDelete: ON_DELETE = useMutation({
		mutationFn: async (payment_option) => {
			queryClient.setQueryData<TPaymentOption[]>(
				["payment-options"],
				(payment_options) => {
					if (!payment_options) return;

					return payment_options.filter(
						(option) => option._id !== payment_option._id,
					);
				},
			);

			await axios<TPaymentOption>({
				method: "DELETE",
				url: `/payment-options/${payment_option._id}`,
			});

			toast({
				title: "Hurray!",
				description: "Your option has been deleted successfully!",
				duration: 3000,
			});
		},
	});

	const onEdit: ON_EDIT = useMutation({
		mutationFn: async (payment_option) => {
			try {
				const { data } = await axios<TPaymentOption>({
					method: "PUT",
					url: "/payment-options",
					data: payment_option,
				});

				queryClient.setQueryData<TPaymentOption[]>(
					["payment-options"],
					(payment_options) => {
						if (!payment_options) return;

						return payment_options.map((option) => {
							if (option._id === payment_option._id) {
								return data.data;
							}

							return option;
						});
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
		onDelete,
		onEdit,
	};
};
