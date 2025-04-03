import { useAxios } from "@/hooks/useAxios";
import { useBillingService } from "@/services/billing";
import type { MutationResult } from "@/types";
import type { BillingForm, TBilling } from "@/types/billing";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type ON_SUBMIT = MutationResult<BillingForm>;

type BodyFeatures = {
	onSubmit: ON_SUBMIT;
};

export const useBodyFeatures = (): BodyFeatures => {
	const axios = useAxios();
	const queryClient = useQueryClient();
	const {
		billing: { data: billing },
	} = useBillingService();

	const onSubmit: ON_SUBMIT = useMutation({
		mutationFn: async (values) => {
			if (billing) {
				const { data } = await axios<TBilling>({
					method: "PATCH",
					url: `/billing/${billing._id}`,
					data: values,
				});

				queryClient.setQueryData<TBilling>(["billing"], data.data);

				return;
			}

			const { data } = await axios<TBilling>({
				url: "/billing",
				data: values,
				method: "POST",
			});

			queryClient.setQueryData<TBilling>(["billing"], data.data);
		},
	});

	return {
		onSubmit,
	};
};
