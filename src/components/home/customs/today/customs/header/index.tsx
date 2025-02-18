// import { ArrowLeft, ArrowRight } from "lucide-react";

const Header = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <div className="w-5 h-10 bg-red-500 rounded-md" />
        <h3 className="text-base font-semibold text-[red]">Today's</h3>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-end gap-8">
          <h1 className="text-4xl font-semibold">Flash Sales</h1>
          <div className="flex gap-4 items-center">
            <div className="flex flex-col gap-2">
              <h3 className="text-xs font-medium">Days</h3>
              <h1 className="font-bold text-[32px] leading-[30px]">03</h1>
            </div>
            <h1 className="font-bold text-[32px] leading-[30px] text-[#E07575]">
              :
            </h1>
            <div className="flex flex-col gap-2">
              <h3 className="text-xs font-medium">Hours</h3>
              <h1 className="font-bold text-[32px] leading-[30px]">23</h1>
            </div>
            <h1 className="font-bold text-[32px] leading-[30px] text-[#E07575]">
              :
            </h1>
            <div className="flex flex-col gap-2">
              <h3 className="text-xs font-medium">Minutes</h3>
              <h1 className="font-bold text-[32px] leading-[30px]">19</h1>
            </div>
            <h1 className="font-bold text-[32px] leading-[30px] text-[#E07575]">
              :
            </h1>
            <div className="flex flex-col gap-2">
              <h3 className="text-xs font-medium">Seconds</h3>
              <h1 className="font-bold text-[32px] leading-[30px]">56</h1>
            </div>
          </div>
        </div>
        {/* <div className="flex items-center gap-2">
          <div className="w-[46px] h-[46px] rounded-full bg-[#f5f5f5] flex items-center justify-center">
            <ArrowLeft />
          </div>
          <div className="w-[46px] h-[46px] rounded-full bg-[#f5f5f5] flex items-center justify-center">
            <ArrowRight />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
