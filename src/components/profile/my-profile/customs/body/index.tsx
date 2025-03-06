import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { TUser } from "@/types/user";
import { useFormik } from "formik";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import { useBodyFeatures } from "./features";
import {
  validationCredentialSchema,
  validationSchema
} from "@/models/validation/profile";
import type { CredentialForm } from "@/types/profile";

const Body = () => {
  const auth = useAuthUser<TUser>();
  const {
    onSubmit: { mutateAsync: onSubmit },
    onSubmitCredentials: { mutateAsync: onSubmitCredentials }
  } = useBodyFeatures();

  const formik = useFormik({
    initialValues: {
      first_name: String(auth?.first_name ?? ""),
      last_name: String(auth?.last_name ?? ""),
      email: String(auth?.email ?? "")
    },
    onSubmit: (values) => onSubmit({ ...(auth as TUser), ...values }),
    validationSchema
  });

  const formik_credentials = useFormik<CredentialForm>({
    initialValues: {
      password: "",
      confirm_password: ""
    },
    onSubmit: (values) => onSubmitCredentials(values),
    validationSchema: validationCredentialSchema
  });

  return (
    <div className="flex-1">
      <h1 className="text-[#DB4444] font-semibold">Edit Your Profile</h1>
      <form onSubmit={formik.handleSubmit} className="mt-4 flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4 ">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="first_name">First Name</Label>
            <Input
              {...formik.getFieldProps("first_name")}
              id="first_name"
              placeholder="First Name"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="first_name">Last Name</Label>
            <Input
              {...formik.getFieldProps("last_name")}
              id="last_name"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 ">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              {...formik.getFieldProps("email")}
              disabled
              id="email"
              placeholder="Email"
            />
          </div>
        </div>

        <Button
          disabled={formik.isSubmitting || !(formik.dirty && formik.isValid)}
          type="submit"
          variant={"destructive"}
          className="w-fit"
        >
          {formik.isSubmitting ? "Processing..." : "Save Changes"}
        </Button>
      </form>

      <h1 className="text-[#DB4444] font-semibold mt-4">
        Edit Your Credentials
      </h1>
      <form
        onSubmit={formik_credentials.handleSubmit}
        className="mt-4 flex flex-col gap-4"
      >
        <div className="grid grid-cols-2 gap-4 ">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              {...formik_credentials.getFieldProps("password")}
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="confirm_password">Confirm Password</Label>
            <Input
              {...formik_credentials.getFieldProps("confirm_password")}
              id="confirm_password"
              placeholder="Confirm Password"
            />
          </div>
        </div>

        <Button
          disabled={
            formik_credentials.isSubmitting ||
            !(
              formik_credentials.dirty &&
              formik_credentials.isValid &&
              formik_credentials.values.password ===
                formik_credentials.values.confirm_password
            )
          }
          type="submit"
          variant={"destructive"}
          className="w-fit"
        >
          {formik_credentials.isSubmitting ? "Processing..." : "Save Changes"}
        </Button>
      </form>
    </div>
  );
};

export default Body;
