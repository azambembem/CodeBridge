import { Headset, ShieldCheck, Truck } from "lucide-react";
const Service = () => {
  return (
    <div className="my-[140px] w-[90%] m-auto flex items-center justify-center gap-[88px]">
      <div className="w-[262px] flex flex-col items-center justify-center">
        <div className="w-[80px] h-[80px] bg-black rounded-full flex items-center justify-center border-[14px] border-solid border-[black]">
          <Truck className="text-white" />
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold">FREE AND FAST DELIVERY</h3>
          <h3 className="text-sm">Free delivery for all orders over $140</h3>
        </div>
      </div>
      <div className="w-[262px] flex flex-col items-center justify-center">
        <div className="w-[80px] h-[80px] bg-black rounded-full flex items-center justify-center border-[14px] border-solid border-[black]">
          <Headset className="text-white" />
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold">24/7 CUSTOMER SERVICE</h3>
          <h3 className="text-sm">Friendly 24/7 customer support</h3>
        </div>
      </div>
      <div className="w-[262px] flex flex-col items-center justify-center">
        <div className="w-[80px] h-[80px] bg-black rounded-full flex items-center justify-center border-[14px] border-solid border-[black]">
          <ShieldCheck className="text-white" />
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold">MONEY BACK GUARANTEE</h3>
          <h3 className="text-sm">We reurn money within 30 days</h3>
        </div>
      </div>
    </div>
  );
};

export default Service;
