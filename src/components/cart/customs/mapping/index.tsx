import { Button } from "@/components/ui/button";
import { useReduxDishpatch, useReduxSelector } from "@/hooks/useRedux";
import { InputNumber } from "antd";
import { useNavigate } from "react-router-dom";
import { setProduct } from "@/redux/slices/wishlist";

const Mapping = () => {
  const navigate = useNavigate();
  const dispatch = useReduxDishpatch();
  const { products } = useReduxSelector(({ wishlist }) => wishlist);

  return (
    <div className="mb-[80px] w-full flex flex-col gap-10">
      {/* Header */}
      <div className="flex items-center justify-between gap-2    h-[72px] shadow-md px-10">
        <div className="flex-1">
          <h3 className="text-base">Product</h3>
        </div>
        <div className="flex-1">
          <h3 className="">Price</h3>
        </div>
        <div className="flex-1">
          <h3 className="">Quantity</h3>
        </div>
        <div className="flex-1">
          <h3 className="">Subtotal</h3>
        </div>
      </div>

      {products.map((product) => (
        <div
          key={product._id}
          className="flex items-center justify-between gap-2 h-[72px] shadow-md px-10"
        >
          <div className="flex-1 flex gap-2 items-center">
            <img
              src={product.main_image}
              alt=""
              className="w-[54px] h-[54px]"
            />
            <h3 className="text-base">{product.name}</h3>
          </div>
          <div className="flex-1">
            <h3 className="">{product.price}$</h3>
          </div>
          <div className="flex-1">
            <InputNumber
              onChange={(value) => {
                dispatch(setProduct({ ...product, quantity: Number(value) }));
              }}
              min={0}
              defaultValue={product.quantity}
            />
          </div>
          <div className="flex-1">
            <h3 className="">{product.price * product.quantity}$</h3>
          </div>
        </div>
      ))}

      <div className="flex items-center justify-between h-[72px]">
        <Button onClick={() => navigate("/")} variant={"outline"}>
          Return To Shop
        </Button>
        <Button onClick={() => navigate("/wishlist")} variant={"outline"}>
          Update Cart
        </Button>
      </div>
    </div>
  );
};

export default Mapping;
