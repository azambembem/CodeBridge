import { useFormik } from "formik";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  signInSchema,
  type SignInSchemaType
} from "../models/validations/sign-in";
import { useSignInFeatures } from "./feature";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const {
    onSubmit: { mutateAsync: onSubmit, isPending }
  } = useSignInFeatures();

  const formik = useFormik<SignInSchemaType>({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: signInSchema,
    onSubmit: async (values) => await onSubmit(values)
  });

  return (
    <div className="min-h-screen bg-[#262626] flex items-start justify-center pt-[152px] p-4">
      <div className="w-full max-w-[90vw] sm:max-w-md lg:max-w-lg bg-transparent sm:bg-[#2c2c2c] rounded-none md:rounded-[12px] p-4 sm:p-6 lg:p-12">
        <h1 className="text-[#EEEEEE] text-[16px] md:text-[20px] lg:text-[24px] font-semibold text-center mb-6 sm:mb-8 lg:mb-12">
          관리자 로그인
        </h1>

        <form
          onSubmit={formik.handleSubmit}
          className="space-y-4 sm:space-y-5 lg:space-y-6"
        >
          <div>
            <Label
              htmlFor="email"
              className="text-[14px] mb-2 block font-light text-[#EEEEEE]"
            >
              이메일 (ID)
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              // autoComplete="off"
              placeholder="이메일을 입력해 주세요"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="bg-[#2B2B2B] border-[#4F4F4F] text-[#EEEEEE] placeholder-[#747474] h-[42px] text-[14px] font-light"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-[#FF7B7B] text-[12px] mt-1">
                {formik.errors.email}
              </p>
            )}
          </div>

          <div>
            <Label
              htmlFor="password"
              className="text-[14px] mb-2 block font-light text-[#EEEEEE]"
            >
              비밀번호
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="비밀번호를 입력해 주세요"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="bg-[#2B2B2B] border-[#4F4F4F] text-[#EEEEEE] placeholder-[#747474] h-[42px] text-[14px] font-light"
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-[#FF7B7B] text-[12px] mt-1">
                {formik.errors.password}
              </p>
            )}
          </div>

          <Button
            type="submit"
            disabled={!(formik.isValid && formik.dirty) || isPending}
            className="w-full bg-[#D5001C] hover:bg-[#DB3446] text-[#EEEEEE] font-semibold h-12 rounded-md transition-colors disabled:opacity-50 text-[14px] md:text-[16px] mt-6 sm:mt-8 lg:mt-10"
          >
            {isPending ? "로그인 중..." : "로그인"}
          </Button>

          <div className="text-center mt-4 sm:mt-6 lg:mt-8">
            <div className="flex justify-center items-center space-x-4 text-[14px] font-light">
              <button
                onClick={() => navigate("/sign-up")}
                type="button"
                className="text-[#EEEEEE] hover:text-[#bbbaba] transition-colors"
              >
                회원가입
              </button>
              <span className="text-[#4F4F4F]">|</span>
              <button
                type="button"
                className="text-[#EEEEEE] hover:text-[#bbbaba] transition-colors"
                onClick={() => navigate("/forgot-password")}
              >
                아이디/비밀번호 찾기
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
