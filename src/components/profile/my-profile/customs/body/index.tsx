import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { TUser } from "@/types/user";
import { useFormik } from "formik";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import { useBodyFeatures } from "./features";

const Body = () => {
  const {
    onSubmit: { mutateAsync: onSubmit }
  } = useBodyFeatures();
  const auth = useAuthUser<TUser>();
  const formik = useFormik({
    initialValues: {
      first_name: String(auth?.first_name ?? ""),
      last_name: String(auth?.last_name ?? ""),
      email: String(auth?.email ?? "")
    },
    onSubmit: (values) => onSubmit({ ...(auth as TUser), ...values })
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

        <Button type="submit" variant={"destructive"} className="w-fit">
          Save Changes
        </Button>
      </form>
    </div>
  );
};

export default Body;
