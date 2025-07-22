// import { useNavigate } from "react-router-dom";
// import { Button } from "../ui/button";
// import { Input } from "../ui/input";
// import { GoogleOutlined } from "@ant-design/icons";
// import { useFormik } from "formik";
// import { useSignUpFeatures } from "./features";
// import type { SignUpForm } from "@/types/sign-up";
// import { signUpSchema } from "@/models/validation/sign-up";

// const SignUp = () => {
//   const navigate = useNavigate(); // boshqa faylga click qilish uchun
//   const {
//     onSubmit: { mutateAsync: onSubmit }
//   } = useSignUpFeatures();

//   const formik = useFormik<SignUpForm>({
//     // SignUpForm buyerda types/sign-up ichida type berilgan holatda keliyapti.
//     initialValues: {
//       name: "",
//       email: "",
//       password: ""
//     },
//     onSubmit: async (values) => await onSubmit(values),
//     validationSchema: signUpSchema
//   });

//   return (
//     <div className="h-screen w-full flex items-center">
//       <div className="w-[60%] h-full bg-[#cbe4eb]">
//         <img
//           src="https://static.vecteezy.com/system/resources/previews/001/982/181/non_2x/young-man-with-shopping-cart-vector.jpg"
//           alt=""
//           className="h-full w-full"
//         />
//       </div>
//       <div className="w-[40%] h-full flex items-center justify-center">
//         <form onSubmit={formik.handleSubmit} className="w-[341px]">
//           <h1 className="text-4xl">Create an account</h1>
//           <h3 className="text-base mt-6">Enter your details below</h3>

//           <Input
//             minLength={8}
//             required
//             placeholder="Name"
//             type="name"
//             className="mt-12"
//             {...formik.getFieldProps("name")}
//           />
//           <Input
//             required
//             placeholder="Email or Phone Number"
//             type="email"
//             className="mt-10"
//             {...formik.getFieldProps("email")}
//           />
//           <Input
//             required
//             placeholder="Password"
//             type="password"
//             minLength={8}
//             className="mt-10"
//             {...formik.getFieldProps("password")}
//           />

//           <Button
//             disabled={!(formik.dirty && formik.isValid) || formik.isSubmitting}
//             className="mt-10 h-[56px] w-full bg-[#DB4444]"
//           >
//             {formik.isSubmitting ? "Creating Account..." : "Create Account"}
//             Create Account
//           </Button>

//           <Button
//             className="mt-10 h-[56px] w-full bg-white text-black "
//             variant={"outline"}
//             onClick={() =>
//               (window.location.href = "http://localhost:5000/auth/google")
//             }
//           >
//             <GoogleOutlined />
//             Sign up with Google
//           </Button>

//           <div className="flex items-center gap-2 mt-8">
//             <h3 className="text-base">Already have account?</h3>
//             <Button
//               onClick={() => navigate("/sign-in")}
//               className="pl-0"
//               variant={"link"}
//             >
//               Log In
//             </Button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { GoogleOutlined } from "@ant-design/icons";
import { useFormik } from "formik";
import { useSignUpFeatures } from "./features";
import type { SignUpForm } from "@/types/sign-up";
import { signUpSchema } from "@/models/validation/sign-up";

const SignUp = () => {
  const navigate = useNavigate();
  const {
    onSubmit: { mutateAsync: onSubmit },
    onGoogleAuthSuccess
  } = useSignUpFeatures();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const userStr = params.get("user");

    let user = {};
    if (userStr) {
      try {
        user = JSON.parse(userStr);
      } catch (e) {
        console.error("User parsing error:", e);
      }
    }

    if (token) {
      onGoogleAuthSuccess(token, user);
    }
  }, [onGoogleAuthSuccess]);

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
          src="https://static.vecteezy.com/system/resources/previews/001/982/181/non_2x/young-man-with-shopping-cart-vector.jpg"
          alt=""
          className="h-full w-full"
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
          </Button>

          <Button
            className="mt-10 h-[56px] w-full bg-white text-black"
            variant={"outline"}
            onClick={() =>
              (window.location.href = "http://localhost:7070/auth/google")
            }
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
