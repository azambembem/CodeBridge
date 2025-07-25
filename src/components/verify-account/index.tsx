import { Navigate } from "react-router-dom";
import { Button } from "../ui/button"; // Sizning Button komponentangiz manzili
import { useVerifyAccountFeatures } from "./features";

export const VerifyAccount = () => {
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");
  const {
    onResendEmail: { mutate: onResendEmail }
  } = useVerifyAccountFeatures();

  if (!email) {
    return <Navigate to="/sign-up" />;
  }

  return (
    <div className="min-h-screen  bg-gradient-to-l from-[#4BC0C8] via-[#C779D0] to-[#FEAC5E] flex items-start justify-center pt-[152px] p-4">
      <div className="w-full max-w-[90vw] sm:max-w-md lg:max-w-lg bg-transparent sm:bg- bg-gradient-to-l from-[#4BC0C8] via-[#C779D0] to-[#FEAC5E] rounded-none md:rounded-[12px] p-4 sm:p-6 lg:p-12">
        <h1 className="text-[#EEEEEE] text-[16px] sm:text-[20px] md:text-[20px] lg:text-[24px] font-semibold text-center mb-6 sm:mb-8 lg:mb-12">
          인증 메일 발송
        </h1>
        <p className="text-[#eee] text-[13px] md:text-[14px] lg:text-[14px] text-center mb-6 sm:mb-8 font-light">
          이메일을 확인하여 계정 인증을 진행해 주세요.
          <br /> 이메일 내 인증 링크는 60분 후 만료됩니다.
        </p>

        <div className="space-y-6 sm:space-y-5 lg:space-y-6">
          <button
            className="w-full border-2 border-solid hover:bg-[#c1a873] text-[#EEEEEE] font-semibold h-12 rounded-md transition-colors disabled:opacity-50 text-[14px] md:text-[16px] lg:text-[16px] mt-6 sm:mt-8 lg:mt-10"
            onClick={() => onResendEmail()}
          >
            이메일 재전송
          </button>

          <div className="text-center mt-4 sm:mt-6 lg:mt-8">
            <span className="text-[#D5001C] text-[13px] md:text-[14px] font-light">
              인증을 완료 하셨나요?
            </span>
            <button
              type="button"
              className="text-[#EEEEEE] text-[13px] md:text-[14px] heover:underline hover:text-[#EEEEEE] transition-colors font-pre ml-1 font-light"
            >
              로그인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
