import { Button } from "@/components/ui/button";
import { CarouselItem } from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";

const Samsung = () => {
  return (
    <CarouselItem
      className="h-[344px] bg-[#c7c5c0] /* Bej rangi */
 flex items-center justify-between pl-[64px]"
    >
      <div>
        <div className="flex items-center gap-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Samsung_Global_Logo_Lettermark.svg/1200px-Samsung_Global_Logo_Lettermark.svg.png"
            alt="samsung-icon"
            className="w-34 h-10"
          />
        </div>
        <h3 className="text-[48px] leading-[60px] text-white font-semibold">
          Up to 20% <br />
          off Voucher
        </h3>
        <div className="flex items-center gap-2">
          <Button variant="link" className="text-white">
            Shop Now <ArrowRight />
          </Button>
        </div>
      </div>
      <img
        src="https://cdn.mockupnest.com/wp-content/uploads/edd/2024/02/05-Samsung-Galaxy-S24-Ultra-Mockup.jpg"
        alt="Samsung"
        className="w-[496px] h-full"
      />
    </CarouselItem>
  );
};

export default Samsung;
