import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useFormik } from "formik";
import { useSignInFeatures } from "./feature";
import { validationSchema } from "@/models/validation/sign-in";

const SignIn = () => {
  const navigate = useNavigate();
  const {
    onSubmit: { mutateAsync: onSubmit }
  } = useSignInFeatures();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: async (values) => await onSubmit(values),
    validationSchema
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
          <h1 className="text-4xl">Log in to Exclusive</h1>
          <h3 className="text-base mt-6">Enter your details below</h3>
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
            disabled={!(formik.dirty && formik.isValid)}
            className="mt-10 h-[56px] w-full bg-[#DB4444]"
          >
            {formik.isSubmitting ? "Signing in" : "Sign in"}
          </Button>

          <div className="flex items-center gap-2 mt-8">
            <h3 className="text-base">Forget Password?</h3>
            <Button
              onClick={() => navigate("/sign-in")}
              className="pl-0"
              variant={"link"}
            >
              Sign up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

// export default SignIn;

// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const SignIn = () => {
//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold text-center mb-4">회원가입</h2>
//       <Formik
//         initialValues={{
//           name: "",
//           email: "",
//           password: "",
//           confirmPassword: "",
//           agreeToTerms: false
//         }}
//         validationSchema={Yup.object({
//           name: Yup.string().required("이름을 입력하세요"),
//           email: Yup.string()
//             .email("유효한 이메일을 입력하세요")
//             .required("이메일을 입력하세요"),
//           password: Yup.string()
//             .min(6, "6자 이상 입력하세요")
//             .required("비밀번호를 입력하세요"),
//           confirmPassword: Yup.string()
//             .oneOf([Yup.ref("password")], "비밀번호가 일치하지 않습니다")
//             .required("비밀번호를 다시 입력하세요"),
//           agreeToTerms: Yup.boolean().oneOf([true], "약관에 동의해야 합니다")
//         })}
//         onSubmit={(values, { setSubmitting, resetForm }) => {
//           setTimeout(() => {
//             alert(JSON.stringify(values, null, 2));
//             setSubmitting(false);
//             resetForm();
//           }, 1000);
//         }}
//         validateOnBlur={true}
//         validateOnChange={false}
//       >
//         {({ isSubmitting, setFieldValue, resetForm }) => (
//           <Form className="flex flex-col space-y-4">
//             {/* 이름 필드 */}
//             <div>
//               <label className="block font-medium">이름</label>
//               <Field
//                 type="text"
//                 name="name"
//                 className="w-full px-3 py-2 border rounded"
//               />
//               <ErrorMessage
//                 name="name"
//                 component="div"
//                 className="text-red-500 text-sm"
//               />
//             </div>

//             {/* 이메일 필드 */}
//             <div>
//               <label className="block font-medium">이메일</label>
//               <Field
//                 type="email"
//                 name="email"
//                 className="w-full px-3 py-2 border rounded"
//               />
//               <ErrorMessage
//                 name="email"
//                 component="div"
//                 className="text-red-500 text-sm"
//               />
//             </div>

//             {/* 비밀번호 필드 */}
//             <div>
//               <label className="block font-medium">비밀번호</label>
//               <Field
//                 type="password"
//                 name="password"
//                 className="w-full px-3 py-2 border rounded"
//               />
//               <ErrorMessage
//                 name="password"
//                 component="div"
//                 className="text-red-500 text-sm"
//               />
//             </div>

//             {/* 비밀번호 확인 필드 */}
//             <div>
//               <label className="block font-medium">비밀번호 확인</label>
//               <Field
//                 type="password"
//                 name="confirmPassword"
//                 className="w-full px-3 py-2 border rounded"
//               />
//               <ErrorMessage
//                 name="confirmPassword"
//                 component="div"
//                 className="text-red-500 text-sm"
//               />
//             </div>

//             {/* 약관 동의 체크박스 */}
//             <div className="flex items-center">
//               <Field type="checkbox" name="agreeToTerms" className="mr-2" />
//               <label>약관에 동의합니다</label>
//             </div>
//             <ErrorMessage
//               name="agreeToTerms"
//               component="div"
//               className="text-red-500 text-sm"
//             />

//             {/* 자동 입력 버튼 */}
//             <button
//               type="button"
//               className="bg-gray-500 text-white px-4 py-2 rounded"
//               onClick={() => setFieldValue("email", "test@example.com")}
//             >
//               이메일 자동 입력
//             </button>

//             {/* 제출 및 초기화 버튼 */}
//             <div className="flex justify-between">
//               <button
//                 type="submit"
//                 className="bg-blue-500 text-white px-4 py-2 rounded"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? "제출 중..." : "제출"}
//               </button>
//               <button
//                 type="button"
//                 className="bg-red-500 text-white px-4 py-2 rounded"
//                 onClick={() => resetForm()}
//               >
//                 초기화
//               </button>
//             </div>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default SignIn;
