import type { TBilling } from "../billing";
import type { IProduct } from "../home";
import type { TUser } from "../user";

export type TPurchase = {
	_id: string;
	billing_id: TBilling;
	products: { quantity: number; product_id: IProduct; _id: string }[];
	user_id: TUser;
	__v: number;
};
