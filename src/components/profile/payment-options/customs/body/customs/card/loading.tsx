import { Button } from "@/components/ui/button";
import { Delete, Edit } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
	return (
		<div className="flex items-center justify-between gap-2 h-[72px] shadow-md px-10">
			<div className="flex-1 flex gap-2 items-center">
				<Skeleton className="w-full h-4" />
			</div>
			<div className="flex-1">
				<Skeleton className="w-full h-4" />
			</div>
			<div className="flex-1">
				<Skeleton className="w-full h-4" />
			</div>
			<div className="flex-1 flex gap-4">
				<Button disabled variant={"ghost"}>
					<Edit />
				</Button>
				<Button disabled variant={"ghost"}>
					<Delete />
				</Button>
			</div>
		</div>
	);
};

export default Loading;
