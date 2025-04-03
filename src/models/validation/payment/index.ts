import * as Yup from "yup";

export const createPaymentOptionSchema = Yup.object({
	card_name: Yup.string().required("Card Name is required"),
	card_number: Yup.string().required("Card Number is required"),
	phone_number: Yup.string().required("Phone Number is required"),
});
