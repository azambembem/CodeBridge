import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useAccountVerifiedFeatures = () => {
	const onSubmit = useMutation({
		mutationFn: async () => {
			const queryParams = new URLSearchParams(location.search);
			const token = queryParams.get("token");

			await axios({
				method: "POST",
				url: "http://localhost:8080/auth/verify-register",
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
		},
		onSuccess: () => {
			// Muvaffaqiyatli kirishda modalni yo'naltirish
		},
		onError: (error) => {
			console.error("Error in resend-email:", error);
		},
	});

	return {
		onSubmit,
	};
};
