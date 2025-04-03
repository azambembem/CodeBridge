import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
	return (
		<div className="my-[80px]">
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">Home</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<Skeleton className="w-[100px] h-5" />
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<Skeleton className="w-[100px] h-5" />
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
		</div>
	);
};

export default Loading;
