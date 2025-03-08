import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useReduxSelector } from "@/hooks/useRedux";
import type { BillingForm } from "@/types/billing";
import type { useFormik } from "formik";
import type { FC } from "react";
import { useMemo } from "react";

type InfoProps = {
  formik: ReturnType<typeof useFormik<BillingForm>>;
};

const Info: FC<InfoProps> = (props) => {
  const { formik } = props;
  const { products } = useReduxSelector(({ wishlist }) => wishlist);

  const call = useMemo(() => {
    return products.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
  }, [products]);

  return (
    <div className="w-[527px]">
      <div className="flex flex-col gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="h-[54px] w-full flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <img
                src={product.main_image}
                className="w-[54px] h-[54px]"
                alt=""
              />

              <h3 className="text-base">{product.name}</h3>
            </div>
            <h3 className="text-base">${product.price * product.quantity}</h3>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-6">
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
      </div>

      <div className="mt-8 flex flex-col gap-8">
        <div className="flex items-center space-x-2">
          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                onChange={() => {
                  formik.setFieldValue("payment", "bank");
                }}
                checked={formik.values.payment === "bank"}
                value="default"
                id="bank"
              />
              <Label htmlFor="bank">Bank</Label>
            </div>
            <div className="mt-8 flex flex-col gap-8">
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  onChange={() => {
                    formik.setFieldValue("payment", "cash");
                  }}
                  checked={formik.values.payment === "cash"}
                  value="comfortable"
                  id="cash"
                />
                <Label htmlFor="cash">Cash on delivery</Label>
              </div>
            </div>
          </RadioGroup>
        </div>
      </div>
      <div className="flex gap-2 mt-8">
        <Input placeholder="Coupon Code"></Input>
        <Button variant={"destructive"} className="">
          Apply Coupon
        </Button>
      </div>

      <Button
        disabled={
          !(formik.dirty && formik.isValid && Boolean(products.length)) ||
          formik.isSubmitting
        }
        className="mt-8"
        type="submit"
      >
        {formik.isSubmitting ? "Processing..." : "Place Order"}
      </Button>
    </div>
  );
};

export default Info;
