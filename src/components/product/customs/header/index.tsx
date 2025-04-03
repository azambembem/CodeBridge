import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Loading from "./loading";
import { useProductCache } from "@/services/product";

const Header = () => {
	const {
		product: { data: product, isLoading, isError },
	} = useProductCache();

	if (isLoading || isError) {
		return <Loading />;
	}

	return (
		<div className="my-[80px]">
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">Home</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>{product?.category?.name ?? "---"}</BreadcrumbPage>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>{product?.name}</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
		</div>
	);
};

export default Header;
