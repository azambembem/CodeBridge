import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import type { BillingForm } from "@/types/billing";
import type { useFormik } from "formik";
import type { FC } from "react";

type InputsProps = {
  formik: ReturnType<typeof useFormik<BillingForm>>;
};

const Inputs: FC<InputsProps> = (props) => {
  const { formik } = props;

  return (
    <div className="w-[470px] flex flex-col gap-8">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="first_name">First Name</Label>
        <Input
          {...formik.getFieldProps("first_name")}
          id="first_name"
          placeholder="First Name"
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="last_name">Last Name</Label>
        <Input
          {...formik.getFieldProps("last_name")}
          id="last_name"
          placeholder="Last Name"
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="street_address">Street Address*</Label>
        <Input
          {...formik.getFieldProps("street_address")}
          id="street_address"
          placeholder="Street Address"
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="additional_address">
          Apartment, floor, etc. (optional)
        </Label>
        <Input
          {...formik.getFieldProps("addational_address")}
          id="additional_address"
          placeholder="Additional Information"
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="town_city">Town/City*</Label>
        <Input
          {...formik.getFieldProps("city")}
          id="town_city"
          placeholder="Town City"
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="phone_number">Phone Number*</Label>
        <Input
          {...formik.getFieldProps("phone_number")}
          id="phone_number"
          placeholder="Phone Number"
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Email Address*</Label>
        <Input
          {...formik.getFieldProps("email")}
          id="email"
          placeholder="Email Address"
        />
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox className="bg-[red] text-white" id="terms" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Save this information for faster check-out next time
        </label>
      </div>
    </div>
  );
};

export default Inputs;
