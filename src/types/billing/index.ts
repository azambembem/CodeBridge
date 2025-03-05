export type BillingForm = {
    first_name: string;
    last_name: string;
    street_address: string;
    additional_address: string;
    city: string;
    phone_number: string;
    email: string;
    terms: boolean;
    payment: "bank" | "cash"
}

export type TBilling = {
	city: string;
	email: string;
	first_name: string;
	last_name: string;
	phone_number: string;
	street_address: string;
	user_id: string;
	__v: number;
	_id: string;
};