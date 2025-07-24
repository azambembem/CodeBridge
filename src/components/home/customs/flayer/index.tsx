import { Button } from "@/components/ui/button";

const Flayer = () => {
  const scrollToSection = (targetId: string) => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      className="w-full min-h-screen flex justify-center items-center relative  bg-gradient-to-l from-[#4BC0C8] via-[#C779D0] to-[#FEAC5E]
"
    >
      {/* Main Content */}
      <div className="relative w-full py-16 md:py-24 lg:py-32 z-10">
        <div className="w-[90%] max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Content - Text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-24">
            <h1 className="text-[24px] md:text-[28px] lg:text-[40px] font-semibold mb-8 text-[#EEEEEE] leading-tight">
              {/* 모바일: 3줄 */}
              <span className="block md:hidden">
                IT 온라인 코스 당신의 기술을
              </span>
              <span className="block md:hidden">한 단계 업그레이드하세요</span>
              {/* 태블릿 ~ PC: 2줄 */}
              <span className="hidden md:block">
                <span className="block whitespace-nowrap">
                  IT 온라인 코스 당신의 기술을
                </span>
                <span className="block whitespace-nowrap">
                  한 단계 업그레이드하세요
                </span>
              </span>
            </h1>
            <p className="text-[16px] lg:text-[20px] text-[#A5A5A5] mb-10 font-pre">
              {/* 모바일: 3줄 */}
              <span className="block md:hidden">
                반복적이고 번거로운 작업은
              </span>
              <span className="block md:hidden">인공지능이 대신합니다.</span>
              <span className="block md:hidden">
                생산성을 높이고 더 효율적으로 작업하세요.
              </span>
              {/* 태블릿 ~ PC: 2줄 */}
              <span className="hidden md:block">
                <span className="block whitespace-nowrap">
                  반복적이고 번거로운 작업은 인공지능이 대신합니다.
                </span>
                <span className="block whitespace-nowrap">
                  생산성을 높이고 더 효율적으로 작업하세요.
                </span>
              </span>
            </p>
            <div className="flex flex-col sm:flex-row max-sm:w-[60%] max-sm:m-auto gap-3 justify-center lg:justify-start">
              <Button
                className="bg-[#D5001C] text-[#EEEEEE] text-[16px] font-semibold rounded-md
                     w-[200px] h-[48px]  hover:bg-[#DB3446]"
              >
                AI 설계 시작하기
              </Button>

              <Button
                onClick={() => scrollToSection("contact-heading")}
                className="w-[200px] h-[48px] lg:w-[160px] bg-[#1F1F1F] hover:bg-[#3B3B3B]
             text-[#EEEEEE] text-[16px] border border-[#eee] font-semibold
             rounded-md"
              >
                문의하기
              </Button>
            </div>
          </div>

          {/* Right Content - Dashboard Image */}
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <img
                src="/imgs/main-img.svg"
                alt="ToFit FITC Dashboard"
                className="w-full h-auto rounded-lg shadow-2xl object-contain"
                style={{
                  backgroundColor: "rgba(38, 38, 38, 0.8)",
                  backdropFilter: "blur(10px)"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flayer;
