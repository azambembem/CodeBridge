import CardLoading from "./customs/card/loading";

const Loading = () => {
	return (
		<div className="flex flex-col items-center mb-[60px]">
			<div className="w-full mt-[40px] grid grid-cols-5 gap-6 max-2xl:grid-cols-4  max-xl:grid-cols-3">
				<CardLoading />
				<CardLoading />
				<CardLoading />
				<CardLoading />
				<CardLoading />
			</div>
			<div className="w-[234px] h-[56px] bg-[#DB4444] rounded-md flex items-center justify-center cursor-pointer mt-[60px]">
				<h3 className="text-[#FAFAFA] text-base font-medium">
					View All Products
				</h3>
			</div>
		</div>
	);
};

export default Loading;
