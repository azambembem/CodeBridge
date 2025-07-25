import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ServiceTermsPage = () => {
  return (
    <div className="bg-[#262626] min-h-screen py-10 sm:py-16 lg:py-32 px-5 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-[900px] mx-auto">
        <h1 className="text-[16px] md:text-[24px] lg:text-[24px] font-semibold mb-8 sm:mb-10 lg:mb-12 text-[#EEEEEE]">
          서비스 이용약관
        </h1>

        <div className="mb-6 sm:mb-8">
          <Select defaultValue="2025-01-01">
            <SelectTrigger className="w-[140px] sm:w-[160px] lg:w-[180px] h-[36px] sm:h-[40px] bg-[#262626] text-[#EEEEEE] border-[#4F4F4F] hover:border-[#4F4F4F] focus:ring-offset-0 focus:ring-transparent text-sm sm:text-base">
              <SelectValue placeholder="시행일 선택" />
            </SelectTrigger>
            <SelectContent className="bg-[#2B2B2B] text-[#EEEEEE] border-[#4F4F4F] font-light">
              <SelectGroup>
                <SelectItem value="2025-01-01">2025-01-01</SelectItem>
                <SelectItem value="2024-01-01">2025-01-01</SelectItem>
                <SelectItem value="2023-01-01">2025-01-01</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-6 sm:space-y-8 text-[#A5A5A5]">
          <div>
            <h2 className="text-[13px] md:text-[14px] lg:text-[14px] font-semibold mb-3 sm:mb-4">
              제1조 목적
            </h2>
            <p className="text-[13px] md:text-[14px] lg:text-[14px] font-light leading-relaxed">
              이 약관은 주식회사 투핏트(이하 "회사")가 운영하고 제공하는
              서비스(이하 "서비스")를 이용함에 있어 "회사"와 "회원"과의 권리,
              의무, 책임사항 및 필요사항의 규정을 목적으로 합니다.
            </p>
          </div>

          <div className="py-6 sm:py-8">
            <h2 className="text-[13px] md:text-[14px] lg:text-[14px] font-semibold mb-4 sm:mb-6">
              제2조 용어의 정의
            </h2>
            <p className="text-[13px] md:text-[14px] lg:text-[14px] font-light leading-relaxed mb-4 sm:mb-6">
              본 약관에서 사용하는 용어의 정의는 다음과 같습니다.
            </p>
            <ol className="list-decimal list-outside pl-4 sm:pl-6 space-y-2 sm:space-y-3 leading-relaxed text-[13px] md:text-[14px] lg:text-[14px] font-light">
              <li>
                "서비스"란 회사가 인터넷 웹 등을 통해 직접 구성한 소프트웨어
                또는 용역(이하 "용역")을 이용하거나 컨설팅을 제공하는 서비스를
                말합니다.
              </li>
              <li>
                "회원"이란 본 약관에 동의하고 회사와 이용계약을 체결하여 회사가
                제공하는 서비스를 이용하는 자를 말합니다.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTermsPage;
