import { useFormik } from "formik";
import Info from "./customs/info";
import Inputs from "./customs/inputs";
import type { BillingForm } from "@/types/billing";
import { validationSchema } from "@/models/validation/billing";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import { useNavigate } from "react-router-dom";
import { useDetailsFeatures } from "./features";

const Details = () => {
  const navigate = useNavigate();
  const isAuthenticated = useIsAuthenticated();
  const {
    onSubmit: { mutateAsync: onSubmit }
  } = useDetailsFeatures();

  const formik = useFormik<BillingForm>({
    initialValues: {
      first_name: "",
      last_name: "",
      street_address: "",
      additional_address: "",
      city: "",
      phone_number: "",
      email: "",
      terms: "",
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
