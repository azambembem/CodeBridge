import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useVerifyAccountFeatures = () => {
	const queryParams = new URLSearchParams(location.search);
	const email = queryParams.get("email");

	const onResendEmail = useMutation({
		mutationFn: async () => {
			await axios({
				method: "POST",
				url: "http://localhost:8080/auth/resend-verify-account-mail",
				data: {
					email,
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
		onResendEmail,
	};
};
