import { Button } from "@/components/ui/button";
import { CarouselItem } from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";

const Lg = () => {
  return (
    <CarouselItem className="h-[344px] bg-[#c2ac75] flex items-center justify-between pl-[64px]">
      <div>
        <div className="flex items-center gap-6">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnXGdMYvoM-Dib61dFNGiUpkzIXOIEOc3bmA&s"
            alt="lg-icon"
            className="h-10"
          />
        </div>
        <h3 className="text-[48px] leading-[60px] text-white font-semibold">
          Up to 30% <br />
          off Voucher
        </h3>
        <div className="flex items-center gap-2">
          <Button variant="link" className="text-white">
            Shop Now <ArrowRight />
          </Button>
        </div>
      </div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Art0HlFsI6AocsEiL0ya3WuRvRDCmtrymw&s"
        alt="LG"
        className="w-[496px] h-full"
      />
    </CarouselItem>
  );
};

export default Lg;
