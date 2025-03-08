import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { GoogleOutlined } from "@ant-design/icons";
import { useFormik } from "formik";
import { useSignUpFeatures } from "./features";
import type { SignUpForm } from "@/types/sign-up";
import { signUpSchema } from "@/models/validation/sign-up";

const SignUp = () => {
  const navigate = useNavigate(); // boshqa faylga click qilish uchun
  const {
    onSubmit: { mutateAsync: onSubmit }
  } = useSignUpFeatures();

  const formik = useFormik<SignUpForm>({
    initialValues: {
      name: "",
      email: "",
      password: ""
    },
    onSubmit: async (values) => await onSubmit(values),
    validationSchema: signUpSchema
  });

  return (
    <div className="h-screen w-full flex items-center">
      <div className="w-[60%] h-full bg-[#cbe4eb]">
        <img
          src="https://s3-alpha-sig.figma.com/img/75f3/94c0/a1c7dc5b68a42239311e510f54d8cd59?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=t8wZHsu4t6sGNRdp2hgNCK-cXVlo~fej8Sdy0iSiC~D6BiHQRn9qjOYV3lC~nE1De9jnl1Pu095mw5rEzp5XWlbk8Tx19uwLGDZ1VSmq-GouE8aVcN2XzrKcx8~45HTfIYh7oCd23~kM-6FSBWy1FyDwXxSfQQ0bH05tIEST6KSrtqldRsZequVOhDprGo0YElOaW9z3YwZzC4l7XPRvNveG-UlHzbNQyp8H3M89yPcGqGh7u~tDPGdZ1z49WiEYwbwgqInrjfb-AJL9SkkqKDTJH8TsgFxL-4W7XLim9cldWC3vsFy-GMiC0cHJyKQQEk2dkdFumix~chKrppmejA__"
          alt=""
        />
      </div>
      <div className="w-[40%] h-full flex items-center justify-center">
        <form onSubmit={formik.handleSubmit} className="w-[341px]">
          <h1 className="text-4xl">Create an account</h1>
          <h3 className="text-base mt-6">Enter your details below</h3>

          <Input
            minLength={8}
            required
            placeholder="Name"
            type="name"
            className="mt-12"
            {...formik.getFieldProps("name")}
          />
          <Input
            required
            placeholder="Email or Phone Number"
            type="email"
            className="mt-10"
            {...formik.getFieldProps("email")}
          />
          <Input
            required
            placeholder="Password"
            type="password"
            minLength={8}
            className="mt-10"
            {...formik.getFieldProps("password")}
          />

          <Button
            disabled={!(formik.dirty && formik.isValid) || formik.isSubmitting}
            className="mt-10 h-[56px] w-full bg-[#DB4444]"
          >
            {formik.isSubmitting ? "Creating Account..." : "Create Account"}
            Create Account
          </Button>

          <Button
            className="mt-10 h-[56px] w-full bg-white text-black "
            variant={"outline"}
          >
            <GoogleOutlined />
            Sign up with Google
          </Button>

          <div className="flex items-center gap-2 mt-8">
            <h3 className="text-base">Already have account?</h3>
            <Button
              onClick={() => navigate("/sign-in")}
              className="pl-0"
              variant={"link"}
            >
              Log In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
