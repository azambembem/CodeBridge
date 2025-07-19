import { usePurchaseCache } from "@/services/purchase";
import Card from "./customs/card";
import Loading from "./loading";

const Body = () => {
	const {
		purchase: { data: purchase, isLoading, isError },
	} = usePurchaseCache();

	if (isLoading || isError) {
		return <Loading />;
	}

	return (
		<div className="flex-1">
			<h1 className="text-[#DB4444] text-base font-semibold">Orders</h1>
			<div className="mt-4">
				{/* Header */}
				<div className="flex items-center justify-between gap-2 h-[72px] shadow-md px-10">
					<div className="flex-1">
						<h3 className="text-base">Total Product</h3>
					</div>
					<div className="flex-1">
						<h3 className="text-base">Total Sum</h3>
					</div>
					<div className="flex-1">
						<h3 className="text-base">Email</h3>
					</div>
				</div>

				<div className="flex flex-col gap-4 mt-4">
					{purchase?.map((purchase) => (
						<Card key={purchase?._id} {...purchase} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Body;
