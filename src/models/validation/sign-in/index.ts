import * as Yup from "yup";

export const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});

export type SignInSchemaType = Yup.InferType<typeof validationSchema>;
