import { useReduxDispatch } from "@/hooks/useRedux";
import { addProduct } from "@/redux/slices/wishlist";
import { useWishlistFeature } from "@/services/wishlist";
import { calculateDiscountRange } from "@/tools";
import type { IProduct } from "@/types/home";
import { Rate } from "antd";
import { Heart, Eye } from "lucide-react";
import type { FC } from "react";
import { useNavigate } from "react-router-dom";

type CardProps = {
	product: IProduct;
};

const Card: FC<CardProps> = (props) => {
	const { product } = props;
	const navigate = useNavigate();
	const dispatch = useReduxDispatch();

	const { isToggled, onToggle } = useWishlistFeature();

	const toggled = isToggled(product);

	return (
		<div className="h-[350px] w-full flex flex-col gap-4">
			<div className="h-[250px] bg-[#F5F5F5] relative flex items-center justify-center group rounded-lg">
				<img
					src={product?.main_image}
					alt="example"
					className="w-[80%] h-[80%]"
				/>

				<div className="flex-col gap-2 absolute top-3 right-3 hidden group-hover:flex">
					<div
						onClick={() => onToggle(product)}
						className="h-[34px] w-[34px] rounded-full bg-white flex items-center justify-center cursor-pointer"
					>
						<Heart
							className="w-4 h-4"
							fill={toggled ? "red" : undefined}
							stroke={toggled ? "red" : undefined}
						/>
					</div>
					<div
						onClick={() => navigate(`/product/${product._id}`)}
						className="h-[34px] w-[34px] rounded-full bg-white flex items-center justify-center cursor-pointer"
					>
						<Eye className="w-4 h-4" />
					</div>
				</div>

				{Boolean(product?.discount) && (
					<div className="w-[55px] h-[26px] bg-[#DB4444] flex items-center justify-center rounded absolute top-3 left-3">
						<h3 className="text-xs text-white">-{product?.discount}%</h3>
					</div>
				)}

				<div
					onClick={() => dispatch(addProduct(product))}
					className="w-full h-[41px] absolute bottom-0 left-0 bg-black rounded-bl-lg rounded-br-lg items-center justify-center cursor-pointer hidden group-hover:flex"
				>
					<h3 className="text-base font-medium text-white">Add To Cart</h3>
				</div>
			</div>
			<div>
				<h3 className="text-base font-medium">{product?.name}</h3>
				<div className="flex gap-2">
					<h3 className="text-[#DB4444] text-base font-medium">
						${product?.price}
					</h3>
					{Boolean(product?.discount) && (
						<h3 className="text-[#000000] text-base font-medium line-through">
							${calculateDiscountRange(product)}
						</h3>
					)}
				</div>
				<div className="flex gap-2 items-center">
					<Rate />
					<h3 className="text-[#000000] text-base font-medium">(88)</h3>
				</div>
			</div>
		</div>
	);
};

export default Card;
