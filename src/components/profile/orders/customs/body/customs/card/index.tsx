import type { TPurchase } from "@/types/purchase";
import type { FC } from "react";

const Card: FC<TPurchase> = (purchase) => {
	return (
		<div className="flex items-center justify-between gap-2 h-[72px] shadow-md px-10">
			<div className="flex-1 flex gap-2 items-center">
				<h3 className="text-base">{purchase?.products?.length}</h3>
			</div>
			<div className="flex-1">
				<h3 className="text-base">
					$
					{purchase?.products?.reduce(
						(acc, curr) => acc + curr.product_id.price * curr.quantity,
						0,
					)}
				</h3>
			</div>
			<div className="flex-1">
				<h3 className="text-base">{purchase.billing_id.email}</h3>
			</div>
		</div>
	);
};

export default Card;
