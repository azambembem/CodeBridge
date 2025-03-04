import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useReduxSelector } from "@/hooks/useRedux";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

const Discount = () => {
  const navigate = useNavigate();
  const { products } = useReduxSelector(({ wishlist }) => wishlist);

  const call = useMemo(() => {
    return products.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
  }, [products]);

  return (
    <div className="flex items-start justify-between mb-[140px]">
      <div className="w-[527px] flex gap-2">
        <Input placeholder="Coupon Code" />
        <Button variant={"destructive"}>Apply Coupon</Button>
      </div>
      <div className="w-[470px] py-[32px] px-[24px] border border-solid rounded-md flex flex-col gap-6">
        <h3 className="text-xl font-semibold">Cart Total</h3>

        <div className="flex flex-col gap-2">
          <div className="w-full flex items-center justify-between">
            <h3 className="text-sm">Subtotal:</h3>
            <h3 className="text-sm">{call}$</h3>
          </div>
          <div className="border border-solid" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="w-full flex items-center justify-between">
            <h3 className="text-sm">Shipping:</h3>
            <h3 className="text-sm">Free</h3>
          </div>
          <div className="border border-solid" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="w-full flex items-center justify-between">
            <h3 className="text-sm">Total:</h3>
            <h3 className="text-sm">${call}</h3>
          </div>
          <div className="border border-solid" />
        </div>

        <Button onClick={() => navigate("/billing")} variant={"destructive"}>
          Procees to checkout
        </Button>
      </div>
    </div>
  );
};

export default Discount;
