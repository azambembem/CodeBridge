import { Navigate } from "react-router-dom";
import { useAccountVerifiedFeatures } from "./features";
import { useEffect } from "react";

export const AccountVerified = () => {
  const {
    onSubmit: { mutate: onSubmit }
  } = useAccountVerifiedFeatures();
  // URL'dan token qabul qilish
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  if (!token) {
    return <Navigate to="/sign-up" />;
  }

  useEffect(() => {
    onSubmit();
  }, []);

  return (
    <div className="w-full h-screen bg-[#262626] flex flex-col items-center px-4 pt-[140px] md:pt-[188px] lg:pt-[232px]">
      <div className="text-center max-w-md-full">
        <h1 className="text-[16px] md:text-[20px] lg:text-[24px] text-[#eee] mb-4 font-pre font-semibold">
          계정 인증이 완료되었습니다!
        </h1>
        <p className="text-[#A5A5A5] text-[13px] md:text-[14px] lg:text-[16px] mb-8 font-pre font-light">
          이용 중이던 화면으로 돌아가 주세요.
        </p>
      </div>
    </div>
  );
};
