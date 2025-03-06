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
});


export const validationCredentialSchema = Yup.object({
  password: Yup.string()
    .required("Password is required")
    .min(8, "Too Short")
    .max(66, "Too Long"),
  confirm_password: Yup.string()
    .required("Confirm Password is required")
    .min(2, "Too Short")
    .max(50, "Too Long"),
});

