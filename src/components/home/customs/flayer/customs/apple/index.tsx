import { Button } from "@/components/ui/button";
import { CarouselItem } from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";

const Apple = () => {
  return (
    <CarouselItem className="h-[344px] bg-black flex items-center justify-between pl-[64px]">
      <div>
        <div className="flex items-center gap-6">
          <img
            src="https://s3-alpha-sig.figma.com/img/1126/a357/e5011a6f245df4c38eae015c7c9ccbe7?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kRBquMadDBd-4Cm0713BbcfHtZLkc8uVZIAGJuutux3o5onxtdsrF-8JQKbIIk~zw7Y3DPxa7Eu5QMA7hdghxRoIV7gQ8qhM84kq90CIyrQXmBrjQZsQegK-QFca8E~BzxYUk4xjvbIjKe4oa1Uxjp~YrxGi7siNOYGgJGvR9lTFpD46PdP2oLL9SkF6t1ZexfwgaFvel3OxDG9llrzN8OA4UF7oBp0fyBrWMgMl2PX02zNUwu1EIjLeGAAbl8R8m5rkv65SfWhNDfUZqHa1s7dQES2lDUOT34eUqcBmYxCJRrEjnEybTfgD16s~GqQET6ghU7guE0aD86VxcXyBXQ__"
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
        src="https://s3-alpha-sig.figma.com/img/dc40/ba89/7215f42e5883a64157f0aa3a4d1a866a?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WmmSosBl4QmYNsyoVe7Wc5ve0beqJgURSzqppeFvT2o5BNxosnbgO742rX6N1Q8tKe4tLBMhHsJrg0EGvo9Dp1aGHgq3lsnzqo6zmuTCwW94R5O-47VfTgp7meg~plxZc0evvT3V-PLawM-UMMPQauzRJ0rTdwlgMpIEp8pPFDl0mp3kukcjrAqf5mzfmCmf-MYLqFO6FA8UdLbkO6ERXSW0icEsKFpOvOatQiPzTU6fYSpCqWE0gftxH0frKWb6lbiyFStDM6RAoAm7IJ39p9dkUGCXHPvLezSK1JR8BoYwmWJc68CVQ4B1bWbRPPiiEwyZ37tsLrOEdhNBaTB4eg__"
        alt="Apple"
        className="w-[496px] h-full"
      />
    </CarouselItem>
  );
};

export default Apple;
