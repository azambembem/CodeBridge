import { Skeleton } from "@/components/ui/skeleton";
import { Rate } from "antd";

const Loading = () => {
	return (
		<div className="h-[350px] w-full flex flex-col gap-4">
			<div className="h-[250px] bg-[#F5F5F5] relative flex items-center justify-center group rounded-lg">
				<Skeleton className="w-[80%] h-[80%]" />
			</div>
			<div className="flex flex-col gap-2">
				<Skeleton className="w-full h-[30px]" />
				<Skeleton className="w-[50px] h-[30px]" />
				<div className="flex gap-2 items-center">
					<Rate disabled />
				</div>
			</div>
		</div>
	);
};

export default Loading;
