import CardLoading from "./customs/card/loading";

const Loading = () => {
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
					<CardLoading />
					<CardLoading />
					<CardLoading />
				</div>
			</div>
		</div>
	);
};

export default Loading;
