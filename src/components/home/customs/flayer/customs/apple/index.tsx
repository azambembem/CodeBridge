import { Button } from "@/components/ui/button";
import { CarouselItem } from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";

const Apple = () => {
  return (
    <CarouselItem className="h-[344px] bg-black flex items-center justify-between pl-[64px]">
      <div>
        <div className="flex items-center gap-6">
          <img
            src="data:image/png;base64,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"
            alt="apple-icon"
            className="w-10 h-10"
          />
          <h3 className="text-base text-white">iPhone 14 Series</h3>
        </div>
        <h3 className="text-[48px] leading-[60px] text-white font-semibold">
          Up to 10% <br />
          off Voucher
        </h3>
        <div className="flex items-center gap-2">
          <Button variant="link" className="text-white">
            Shop Now <ArrowRight />
          </Button>
        </div>
      </div>
      <img
        src="https://cdn.xingosoftware.com/techfi/images/fetch/dpr_1,w_658/https%3A%2F%2Ftechfi.nl%2Fassets%2Fupload%2Fimg%2Fpublic%2Foriginal%2Fapple-iphone-14-pro-iphone-14-pro-max-hero-220907.jpg"
        alt="Apple"
        className="w-[496px] h-full"
      />
    </CarouselItem>
  );
};

export default Apple;
