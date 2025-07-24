import { Button } from "@/components/ui/button";

const AiPractice = () => {
  return (
    <div
      className="w-full bg-gradient-to-l from-[#4BC0C8] via-[#C779D0] to-[#FEAC5E]
 py-20 md:py-24 lg:py-28"
    >
      <div className="w-[90%] max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="font-semibold text-[#EEEEEE] mb-12 md:mb-16 text-[18px] md:text-[20px] lg:text-[28px]">
          IT · AI practice-focused online courses
        </h2>

        {/* Button Group */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center font-semibold ">
          <Button className="bg-[#262626] text-[#EEEEEE] border px-8 py-3 rounded-full text-[16px] lg:text-[20px] min-w-[240px] min-h-16 hover:bg-[#3B3B3B]">
            코딩 입문부터 실전까지
          </Button>

          <Button className="bg-[#262626] text-[#EEEEEE] border px-8 py-3 rounded-full text-[16px] lg:text-[20px] min-w-[240px] min-h-16 hover:bg-[#3B3B3B]">
            AI·클라우드 교육
          </Button>

          <Button className="bg-[#262626] text-[#EEEEEE] border px-8 py-3 rounded-full text-[16px] lg:text-[20px] min-w-[240px] min-h-16 hover:bg-[#3B3B3B]">
            실습 프로젝트
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AiPractice;
