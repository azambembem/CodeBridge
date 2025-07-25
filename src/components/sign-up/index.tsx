import { useFormik } from "formik";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronRight } from "lucide-react";
// import ServiceTermsModal from "./modals/service";
// import PrivacyTermsModal from "./modals/privacy";
import { useNavigate } from "react-router-dom";
import { useSignUpFeatures } from "./feature";
import { useReduxDispatch } from "@/hooks/useRedux"; // Redux hook'larini import qilamiz
import { setSignUpModal } from "@/redux/stores/sign-up"; // Yangi Redux action'ini import qilamiz
import {
  signUpSchema,
  type SignUpSchemaType
} from "../models/validations/sign-up";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useReduxDispatch();
  const {
    onSubmit: { mutateAsync: onSubmit, isPending }
  } = useSignUpFeatures();

  const formik = useFormik<SignUpSchemaType>({
    initialValues: {
      surname: "",
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "USER",
      terms: false,
      privacy: false,
      pushMarketing: false
    },
    validationSchema: signUpSchema,
    onSubmit: async (values) => await onSubmit(values)
  });

  const allAgreed =
    formik.values.terms && formik.values.privacy && formik.values.pushMarketing;

  const handleAllAgree = (checked: boolean) => {
    formik.setFieldValue("terms", checked, false);
    formik.setFieldValue("privacy", checked, false);
    formik.setFieldValue("pushMarketing", checked, false);
  };

  return (
    <div className="min-h-screen bg-[#1F1F1F] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#262626] rounded-md p-6 sm:p-8">
        <h1 className="text-[#eee] text-[16px] md:text-[20px] lg:text-[24px] font-semibold text-center mb-8">
          회원가입
        </h1>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label
                htmlFor="surname"
                className="text-[#eee] text-[14px] font-light mb-2 block"
              >
                성
              </Label>
              <Input
                id="surname"
                placeholder="성"
                {...formik.getFieldProps("surname")}
                className="bg-[#262626] border-[#4F4F4F] text-[#eee] placeholder-[#747474] text-[14px] font-light h-12"
              />
              {formik.touched.surname && formik.errors.surname && (
                <p className="text-[#FF7B7B] text-[12px] font-light mt-1">
                  {formik.errors.surname}
                </p>
              )}
            </div>
            <div>
              <Label
                htmlFor="name"
                className="text-[#eee] text-[14px] font-light mb-2 block"
              >
                이름
              </Label>
              <Input
                id="name"
                placeholder="이름"
                {...formik.getFieldProps("name")}
                className="bg-[#262626] border-[#4F4F4F] text-[#eee] placeholder-[#747474] text-[14px] font-light h-12"
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-[#FF7B7B] text-[12px] font-light mt-1">
                  {formik.errors.name}
                </p>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <Label
              htmlFor="email"
              className="text-[#eee] text-[14px] font-light mb-2 block"
            >
              이메일 (ID)
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="이메일을 입력해 주세요"
              {...formik.getFieldProps("email")}
              className="bg-[#262626] border-[#4F4F4F] text-[#eee] placeholder-[#747474] text-[14px] font-light h-12"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-[#FF7B7B] text-[12px] font-light mt-1">
                {formik.errors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <Label
              htmlFor="password"
              className="text-[#eee] text-[14px] font-light mb-2 block"
            >
              비밀번호 설정
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="비밀번호를 입력해 주세요"
              {...formik.getFieldProps("password")}
              className="bg-[#262626] border-[#4F4F4F] text-[#eee] placeholder-[#747474] text-[14px] font-light h-12"
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-[#FF7B7B] text-[12px] font-light mt-1">
                {formik.errors.password}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <Label
              htmlFor="confirmPassword"
              className="text-[#eee] text-[14px] font-light mb-2 block"
            >
              비밀번호 확인
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="비밀번호를 다시 입력해 주세요"
              {...formik.getFieldProps("confirmPassword")}
              className="bg-[#262626] border-[#4F4F4F] text-[#eee] placeholder-[#747474] text-[14px] font-light h-12"
            />
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <p className="text-[#FF7B7B] text-[12px] mt-1">
                  {formik.errors.confirmPassword}
                </p>
              )}
          </div>

          {/* Agreements */}
          <div className="space-y-4">
            <Label className="text-[#eee] text-[14px] font-light block">
              약관동의
            </Label>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="allAgree"
                  checked={allAgreed}
                  onCheckedChange={handleAllAgree}
                  className="border-[#EEEEEE] data-[state=checked]:bg-[#D5001C] data-[state=checked]:border-[#D5001C]"
                />
                <Label
                  htmlFor="allAgree"
                  className="text-[#eee] text-[14px] font-light"
                >
                  전체동의
                </Label>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="terms"
                    checked={formik.values.terms}
                    onCheckedChange={(checked: boolean) =>
                      formik.setFieldValue("terms", checked)
                    }
                    className="border-[#EEEEEE] data-[state=checked]:bg-[#D5001C] data-[state=checked]:border-[#D5001C]"
                  />
                  <Label
                    htmlFor="terms"
                    className="text-[#eee] text-[14px] font-light"
                  >
                    <span className="text-[#FF7B7B]">[필수]</span> 서비스
                    이용약관 동의
                  </Label>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    dispatch(setSignUpModal({ isServiceTermsOpen: true }))
                  } // Redux orqali ochish
                  className="text-[#eee] hover:text-[#eee] transition-colors"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="privacy"
                    checked={formik.values.privacy}
                    onCheckedChange={(checked: boolean) =>
                      formik.setFieldValue("privacy", checked)
                    }
                    className="border-[#EEEEEE] data-[state=checked]:bg-[#D5001C] data-[state=checked]:border-[#D5001C]"
                  />
                  <Label
                    htmlFor="privacy"
                    className="text-[#eee] text-[14px] font-light"
                  >
                    <span className="text-[#FF7B7B]">[필수]</span> 개인정보 수집
                    및 이용 동의
                  </Label>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    dispatch(setSignUpModal({ isPrivacyTermsOpen: true }))
                  } // Redux orqali ochish
                  className="text-[#eee] hover:text-[#eee] transition-colors"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <div className="flex items-center space-x-3">
                <Checkbox
                  id="pushMarketing"
                  checked={formik.values.pushMarketing}
                  onCheckedChange={(checked: boolean) =>
                    formik.setFieldValue("pushMarketing", checked)
                  }
                  className="border-[#EEEEEE] data-[state=checked]:bg-[#D5001C] data-[state=checked]:border-[#D5001C]"
                />
                <Label
                  htmlFor="pushMarketing"
                  className="text-[#eee] text-[14px] font-light"
                >
                  [선택] 마케팅 정보 푸시 수신 동의
                </Label>
              </div>
            </div>

            {formik.touched.terms && formik.errors.terms && (
              <p className="text-[#FF7B7B] text-[12px] mt-1">
                {formik.errors.terms}
              </p>
            )}
          </div>

          {/* Submit */}
          <Button
            type="submit"
            disabled={
              !(formik.isValid && formik.dirty && allAgreed) || isPending
            }
            className="w-full bg-[#D5001C] hover:bg-[#DB3446] text-[#eee] font-semibold h-12 rounded-md transition-colors disabled:opacity-50"
          >
            {isPending ? "Loading..." : "회원가입"}
          </Button>

          <div className="text-center">
            <span className="text-[#A5A5A5] text-[14px] font-light">
              이미 계정이 있으신가요?{" "}
            </span>
            <button
              onClick={() => navigate("/sign-in")}
              type="button"
              className="text-[#eee] text-[14px] hover:underline hover:text-[#eee]"
            >
              로그인
            </button>
          </div>
        </form>
      </div>

      {/* Modals */}
      {/* <ServiceTermsModal />
      <PrivacyTermsModal /> */}
    </div>
  );
};

export default SignUp;
