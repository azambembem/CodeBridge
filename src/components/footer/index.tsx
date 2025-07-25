import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Instagram, QrCode } from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#cba2a2] text-[#eee] py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout (lg+) */}
        <div className="hidden lg:block">
          <div className="flex justify-between items-start">
            {/* Logo and Company Info */}
            <div className="flex items-start space-x-12">
              {/* Logo */}
              <div className="flex items-center">
                <h1 className="text-1xl font-semibold font-pre text-[#2b4070] w-[105px] h-[36px] lg:w-[121px] lg:h-[40px]">
                  CodeBridge
                </h1>
              </div>

              {/* Company Info - 2 rows */}
              <div className="space-y-1 text-[16px] font-light pt-0">
                <div className="flex items-center space-y-6">
                  <span className="text-[#EEEEEE] whitespace-nowrap">
                    CodeBridge
                  </span>
                </div>
                <div className="text-[#eee] font-light text-[14px] ">
                  <span className=" whitespace-nowrap">대표 : CodeBridge</span>
                  <span className="whitespace-nowrap">
                    사업자등록번호 : 0000-00000-0000
                  </span>
                  <span className="whitespace-nowrap">
                    통신판매업신고번호 : 0000-00000-0000
                  </span>
                </div>
                <div className="flex items-center space-x-6 text-[#eee] text-[14px] font-light">
                  <span className="whitespace-nowrap">
                    경기 성남시 수정구 복정동 495 5층 518호
                  </span>
                  <span className="whitespace-nowrap">
                    contact@codebridge.org
                  </span>
                  <span>|</span>

                  <span className="whitespace-nowrap">010-1234-5678</span>
                </div>
                <div className="py-0 text-[14px] text-[#eee] font-light">
                  <p>
                    @ 2025 CodeBridge (Personal Project). All rights reserved.
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-row font-semibold">
              <button
                type="button"
                onClick={() => navigate("/service-terms-pages")}
                className="px-4 mb-20 hover:cursor-pointer transition-colors whitespace-nowrap "
              >
                Join Our Social Community
                <div className="flex justify-between items-center space-x-2 mt-2">
                  <Instagram className="text-[#eee]" />
                  <Instagram className="text-[#eee]" />
                  <Instagram className="text-[#eee]" />
                  <Instagram className="text-[#eee]" />
                </div>
              </button>
              <button
                type="button"
                onClick={() => navigate("/personal-info")}
                className="px-4 py-2 hover:cursor-pointer transition-colors whitespace-nowrap"
              >
                Download App
                <div className="flex justify-between items-center pb-8 pt-2 gap-2">
                  <img
                    className="w-[80px] h-[80px]"
                    alt="qr code"
                    src="https://media.istockphoto.com/id/828088276/ko/%EB%B2%A1%ED%84%B0/qr-%EC%BD%94%EB%93%9C-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%A0%88%EC%9D%B4-%EC%85%98.jpg?s=612x612&w=0&k=20&c=staiAdfjiUsHGXJwqoeZ6-A8mYR-x885N_FYlO64MfE="
                  />
                  <img
                    className="w-[80px] h-[80px]"
                    src="https://thumbs.dreamstime.com/z/google-play%E5%92%8C%E8%8B%B9%E6%9E%9C%E5%BA%94%E7%94%A8%E5%95%86%E5%BA%97%E5%9B%BE%E6%A0%87-%E7%99%BD%E8%89%B2%E8%83%8C%E6%99%AF%E4%B8%AD%E7%AA%81%E6%98%BE-%E6%96%AF%E9%87%8C%E5%85%B0%E5%8D%A1%EF%BC%8C-%E6%9C%88-%E6%97%A5-%E5%B9%B4%EF%BC%9Agoogle-198405342.jpg?w=768"
                    alt=""
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Copyright */}
        </div>

        {/* Tablet Layout (md to lg) */}
        <div className="hidden md:block lg:hidden">
          {/* Logo and Buttons */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <img
                src="/logo/code-bridge-logo.svg"
                alt="CodeBridge"
                className="w-[105px] h-[36px]"
              />
            </div>
            <div className="flex space-x-3 font-semibold">
              <Button
                onClick={() => navigate("/service-terms-pages")}
                className="px-4 py-2 bg-[#3B3B3B] hover:bg-[#4F4F4F] rounded text-sm transition-colors whitespace-nowrap"
              >
                서비스 이용약관
              </Button>
              <Button
                onClick={() => navigate("/personal-info")}
                className="px-4 py-2 bg-[#3B3B3B] hover:bg-[#4F4F4F] rounded text-sm transition-colors whitespace-nowrap"
              >
                개인정보 처리방침
              </Button>
            </div>
          </div>

          {/* Company Info */}
          <div className="space-y-2 text-sm mb-4 font-light">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
              <span className="whitespace-nowrap">CodeBridge</span>
              <span className="text-[#eee] whitespace-nowrap">
                대표 :CodeBridge
              </span>
              <span className="text-[#eee] whitespace-nowrap">
                사업자등록번호 : 0000-00000-0000
              </span>
              <span className="text-[#eee] whitespace-nowrap">
                통신판매업신고번호 : 0000-00000-0000
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
              <span className="text-[#eee] whitespace-nowrap">
                경기 성남시 수정구 복정동 495 5층 518호
              </span>
              <span className="text-[#eee] whitespace-nowrap">
                contact@codebridge.org
              </span>
              <span className="text-[#eee] whitespace-nowrap">
                010-1234-5678
              </span>
            </div>
          </div>

          {/* Copyright */}
          <div>
            <p className="text-sm text-[#eee]">
              @ 2025 CodeBridge (Personal Project). All rights reserved.
            </p>
          </div>
        </div>

        {/* Mobile Layout (sm and below) */}
        <div className="block md:hidden">
          {/* Logo */}
          <div className="flex items-center mb-6">
            <img
              src="/logo/code-bridge-logo.svg"
              alt="CodeBridge"
              className="w-[110px] h-[30px]"
            />
          </div>

          {/* Buttons */}
          <div className="flex space-x-3 mb-6 font-semibold">
            <Button
              onClick={() => navigate("/service-terms-pages")}
              className="px-2 py-2 bg-[#3B3B3B] hover:bg-[#4F4F4F] rounded text-sm transition-colors whitespace-nowrap"
            >
              서비스 이용약관
            </Button>
            <Button
              onClick={() => navigate("/personal-info")}
              className="px-2 py-2 bg-[#3B3B3B] hover:bg-[#4F4F4F] rounded text-sm transition-colors whitespace-nowrap"
            >
              개인정보 처리방침
            </Button>
          </div>

          {/* Company Info - Vertical */}
          <div className="space-y-1 text-sm mb-6 font-light">
            <p className="text-[#EEEEEE] whitespace-nowrap py-2">CodeBridge</p>
            <p className="text-[#eee] whitespace-nowrap">대표 : CodeBridge</p>
            <p className="text-[#eee] whitespace-nowrap">
              사업자등록번호 : 0000-00000-0000
            </p>
            <p className="text-[#eee] whitespace-nowrap">
              통신판매업신고번호 : 0000-00000-0000
            </p>
            <p className="text-[#eee] whitespace-nowrap">
              경기 성남시 수정구 복정동 495 5층 518호
            </p>
            <p className="text-[#eee] whitespace-nowrap">
              contact@codebridge.org
            </p>
            <p className="text-[#eee] whitespace-nowrap">010-1234-5678</p>
            <p className="text-sm text-[#eee]">
              @ 2025 CodeBridge (Personal Project). All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
