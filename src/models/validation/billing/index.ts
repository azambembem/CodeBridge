import * as Yup from "yup";

export const validationSchema = Yup.object({
  first_name: Yup.string()
    .required("First Name is required")
    .min(2, "Too Short")
    .max(50, "Too Long"),
  last_name: Yup.string()
    .required("Last Name is required")
    .min(2, "Too Short")
    .max(50, "Too Long"),
  street_address: Yup.string()
    .required("Street Address is required")
    .min(2, "Too Short")
    .max(50, "Too Long"),
  additional_address: Yup.string()
    .min(2, "Too Short")
    .max(50, "Too Long"),
  city: Yup.string()
    .required("City is required")
    .min(2, "Too Short")
    .max(50, "Too Long"),
  phone_number: Yup.string()
    .required("Phone Number is required")
    .min(2, "Too Short")
    .max(50, "Too Long"),
  email: Yup.string()
    .required("Email is required")
    .min(2, "Too Short")
    .max(50, "Too Long"),
  terms: Yup.boolean().required("Terms is required"),
  payment: Yup.string().required("Payment is required"),
});


// export type SignInSchemaType = Yup.InferType<typeof validationSchema>;
