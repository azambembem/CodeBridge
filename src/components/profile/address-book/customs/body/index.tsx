import type { BillingForm } from "@/types/billing";
import { useFormik } from "formik";
import { validationSchema } from "@/models/validation/billing";
import { useBillingService } from "@/services/billing";
import { useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useBodyFeatures } from "./features";

const Body = () => {
  const {
    billing: { data: billing }
  } = useBillingService();
  const {
    onSubmit: { mutateAsync: onSubmit }
  } = useBodyFeatures();

  const formik = useFormik<BillingForm>({
    initialValues: {
      first_name: "",
      last_name: "",
      street_address: "",
      additional_address: "",
      city: "",
      phone_number: "",
      email: "",
      terms: false,
      payment: "bank"
    },
    onSubmit: (values) => onSubmit(values),
    validationSchema
  });

  useEffect(() => {
    if (billing) {
      formik.setFieldValue("first_name", billing.first_name, false);
      formik.setFieldValue("last_name", billing.last_name, false);
      formik.setFieldValue("street_address", billing.street_address, false);
      formik.setFieldValue("city", billing.city, false);
      formik.setFieldValue("phone_number", billing.phone_number, false);
      formik.setFieldValue("email", billing.email, false);
    }
  }, [billing]);

  return (
    <div className="flex-1">
      <h1 className="text-[#DB4444] text-base font-semibold">Address Book</h1>
      <form
        onSubmit={formik.handleSubmit}
        className="flex justify-between mt-4"
      >
        <div className="w-full flex flex-col gap-8">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="first_name">First Name</Label>
            <Input
              {...formik.getFieldProps("first_name")}
              id="first_name"
              placeholder="First Name"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="last_name">Last Name</Label>
            <Input
              {...formik.getFieldProps("last_name")}
              id="last_name"
              placeholder="Last Name"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="street_address">Street Address</Label>
            <Input
              {...formik.getFieldProps("street_address")}
              id="street_address"
              placeholder="Street Address"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="additional_address">
              Apartment, floor, etc. (optional)
            </Label>
            <Input
              {...formik.getFieldProps("additional_address")}
              id="additional_address"
              placeholder="Additional Information"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="town_city">Town City</Label>
            <Input
              {...formik.getFieldProps("city")}
              id="town_city"
              placeholder="Town City"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="phone_number">Phone Number</Label>
            <Input
              {...formik.getFieldProps("phone_number")}
              id="phone_number"
              placeholder="Phone Number"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email_address">Email Address</Label>
            <Input
              {...formik.getFieldProps("email")}
              id="email_address"
              placeholder="Email Address"
            />
          </div>
          <Button
            disabled={!(formik.dirty && formik.isValid) || formik.isSubmitting}
            type="submit"
          >
            {formik.isSubmitting ? "Processing..." : "Place Order"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Body;
