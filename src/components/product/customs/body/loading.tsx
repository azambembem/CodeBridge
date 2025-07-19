import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Toggle } from "@/components/ui/toggle";
import { Rate } from "antd";
import { Heart, RotateCcw, Truck } from "lucide-react";

const Loading = () => {
	return (
		<div className="flex items-center justify-between h-[600px] mb-[140px] gap-[70px]">
			<div className="flex-1 h-full flex items-center gap-6">
				<div className="h-full w-[170px] grid grid-rows-4 gap-6">
					<Skeleton className="h-full w-full" />
					<Skeleton className="h-full w-full" />
					<Skeleton className="h-full w-full" />
					<Skeleton className="h-full w-full" />
				</div>

				<div className="flex-1 h-full">
					<Skeleton className="h-full w-full" />
				</div>
			</div>
			<div className="flex-1 h-full">
				<Skeleton className="w-full h-5" />
				<div className="flex items-center gap-4 mt-4">
					<Rate disabled />{" "}
					<h3 className="text-sm">
						(- reviewes) | <span className="text-[#00FF66]">In Stock</span>
					</h3>
				</div>

				<Skeleton className="w-[100px] h-5 mt-4" />

				<div className="flex flex-col gap-4 mt-4">
					<Skeleton className="w-full h-5" />
					<Skeleton className="w-full h-5" />
					<Skeleton className="w-full h-5" />
					<Skeleton className="w-[50%] h-5" />
				</div>

				<div className="border-t border-solid w-full mt-4" />

				<div className="flex items-center gap-4 mt-4">
					<h3 className="text-xl">Colours:</h3>

					<div className="flex items-center gap-2">
						<Skeleton className="w-4 h-4 rounded-full" />

						<Skeleton className="w-4 h-4 rounded-full" />
					</div>
				</div>

				<div className="flex items-center gap-4 mt-4">
					<h3 className="text-xl">Sizes:</h3>

					<div className="flex items-center gap-2">
						<Toggle disabled aria-label="Toggle bold">
							XS
						</Toggle>
						<Toggle disabled aria-label="Toggle bold">
							S
						</Toggle>
						<Toggle disabled aria-label="Toggle bold">
							M
						</Toggle>
						<Toggle disabled aria-label="Toggle bold">
							L
						</Toggle>
						<Toggle disabled aria-label="Toggle bold">
							XL
						</Toggle>
					</div>
				</div>
				<div className="flex items-center gap-4 mt-4">
					<div className="flex items-center gap-4">
						<Button disabled>-</Button>
						<h3 className="text-sm font-semibold">-</h3>
						<Button disabled>+</Button>
					</div>
					<Button disabled>Buy Now</Button>
					<Button disabled>
						<Heart />
					</Button>
				</div>

				<div className="mt-4 h-[180px] rounded-md border border-solid w-full flex flex-col">
					<div className="flex-1 flex items-center">
						<div className="w-[72px] h-full flex items-center justify-center">
							<Truck />
						</div>
						<div className="flex flex-col gap-2">
							<h1 className="text-base font-medium">Free Delivery</h1>
							<h3 className="text-xs">
								Enter your postal code for Delivery Availability
							</h3>
						</div>
					</div>
					<div className="border-t border-solid w-full" />
					<div className="flex-1 flex items-center">
						<div className="w-[72px] h-full flex items-center justify-center">
							<RotateCcw />
						</div>
						<div className="flex flex-col gap-2">
							<h1 className="text-base font-medium">Return Delivery</h1>
							<h3 className="text-xs">
								Free 30 Days Delivery Returns. Details
							</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Loading;
