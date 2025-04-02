import { useFormik } from "formik";
import Info from "./customs/info";
import Inputs from "./customs/inputs";
import type { BillingForm } from "@/types/billing";
import { validationSchema } from "@/models/validation/billing";
import { useDetailsFeatures } from "./features";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import { useNavigate } from "react-router-dom";
import { useBillingService } from "@/services/billing";
import { useEffect } from "react";

const Details = () => {
  const navigate = useNavigate();
  const isAuthenticated = useIsAuthenticated();
  const {
    onSubmit: { mutateAsync: onSubmit } //
  } = useDetailsFeatures();

  const {
    billing: { data: billing }
  } = useBillingService();

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
    onSubmit: (values) => {
      if (!isAuthenticated) {
        return navigate("/sign-in");
      }
      return onSubmit(values);
    },
    validationSchema
  });

  console.log(formik.errors);

  useEffect(() => {
    if (billing) {
      formik.setFieldValue("first_name", billing.first_name, false);
      formik.setFieldValue("last_name", billing.last_name, false);
      formik.setFieldValue("street_address", billing.street_address, false);
      formik.setFieldValue("city", billing.city, false);
      formik.setFieldValue("phone_number", billing.phone_number, false);
      formik.setFieldValue("email", billing.email, false);
      console.log(billing);
    }
  }, [billing]);

  return (
    <div>
      <h3 className="text-[36px] font-normal mb-12">Billing Details</h3>

      <form
        onSubmit={formik.handleSubmit}
        className="flex justify-between mb-[140px]"
      >
        <Inputs formik={formik} />
        <Info formik={formik} />
      </form>
    </div>
  );
};

export default Details;
