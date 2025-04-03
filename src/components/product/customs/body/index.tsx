import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { Rate } from "antd";
import { Heart, RotateCcw, Truck } from "lucide-react";
import { useState } from "react";
import Loading from "./loading";
import { useProductCache } from "@/services/product";
import { useWishlistFeature } from "@/services/wishlist";
import { useReduxDispatch } from "@/hooks/useRedux";
import { addProduct } from "@/redux/slices/wishlist";

const Body = () => {
  const dispatch = useReduxDispatch();
  const [quantity, setQuantity] = useState<number>(1);
  const {
    product: { data: product, isLoading, isError }
  } = useProductCache();

  const { isToggled, onToggle } = useWishlistFeature();

  const toggled = product ? isToggled(product) : false;

  if (isLoading || isError) {
    return <Loading />;
  }

  return (
    <div className="flex items-center justify-between h-[600px] mb-[140px] gap-[70px]">
      <div className="flex-1 h-full flex items-center gap-6">
        <div className="h-full w-[170px] grid grid-rows-4 gap-6">
          {product?.images.map((image, index) => (
            <img key={index} src={image} alt="" className="h-full w-full" />
          ))}
        </div>

        <div className="flex-1 h-full">
          <img src={product?.main_image} alt="" className="h-full w-full" />
        </div>
      </div>
      <div className="flex-1 h-full">
        <h1 className="text-2xl font-semibold">{product?.name}</h1>
        <div className="flex items-center gap-4 mt-4">
          <Rate defaultValue={product?.star} />{" "}
          <h3 className="text-sm">
            (150 reviewes) | <span className="text-[#00FF66]">In Stock</span>
          </h3>
        </div>

        <h1 className="mt-4 text-2xl">${product?.price}</h1>

        <p className="text-sm mt-4">
          PlayStation 5 Controller Skin High quality vinyl with air channel
          adhesive for easy bubble free install & mess free removal Pressure
          sensitive.
        </p>

        <div className="border-t border-solid w-full mt-4" />

        <div className="flex items-center gap-4 mt-4">
          <h3 className="text-xl">Colours:</h3>

          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#00FF66] rounded-full cursor-pointer" />
            <div className="w-4 h-4 bg-[#E07575] rounded-full cursor-pointer" />
          </div>
        </div>

        <div className="flex items-center gap-4 mt-4">
          <h3 className="text-xl">Sizes:</h3>

          <div className="flex items-center gap-2">
            <Toggle aria-label="Toggle bold">XS</Toggle>
            <Toggle aria-label="Toggle bold">S</Toggle>
            <Toggle aria-label="Toggle bold">M</Toggle>
            <Toggle aria-label="Toggle bold">L</Toggle>
            <Toggle aria-label="Toggle bold">XL</Toggle>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <div className="flex items-center gap-4">
            <Button
              disabled={quantity <= 1}
              onClick={() => setQuantity(quantity - 1)}
            >
              -
            </Button>
            <h3 className="text-sm font-semibold">{quantity}</h3>
            <Button onClick={() => setQuantity(quantity + 1)}>+</Button>
          </div>
          <Button
            onClick={() => dispatch(addProduct({ ...product!, quantity }))}
          >
            Buy Now
          </Button>
          <Button variant={"outline"} onClick={() => onToggle(product!)}>
            <Heart
              className="w-4 h-4"
              fill={toggled ? "red" : undefined}
              stroke={toggled ? "red" : undefined}
            />
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

export default Body;
