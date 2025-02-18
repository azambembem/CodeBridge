import { Rate } from "antd";
import { Eye, Heart } from "lucide-react";
const Card = () => {
  return (
    <div className="h-[350px] w-full flex flex-col gap-4">
      <div className="h-[250px] bg-[#f5f5f5] relative flex items-center justify-center group rounded-lg">
        <img
          src="https://s3-alpha-sig.figma.com/img/5d5c/2e52/50752d55f8b60f2aa2923183dadbc135?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Lue-WfNRxXsWTtiD1iUM~cfhT4rDJO8dbUzqCA1upxp3l8rtJUDNL90P801snSqj7s5rncO~VjwPhzFT4eGuLTBbmMln2mfFhBVM6hKxZzNxrgnyLGo5-bmuPhs~Ie4gIWspVKSbHFSDvi1ZURKt-RaOGvaipxRqawKg-3zKxIORIwPfHOiyE9WGwmhLRE9WAkVMTplY1NMumImMBEpcw3Gjg-IPXO~L9Gi90MBLUgc834o-ERLZrMxZM9kj7z97~cdYbU7N-N4NZE2teQC2MxoefxyozPBKZ0NIz-KKJ7~KgCeqKJW4h-rwfweCINWQ5UDpDyIBTZyOv4AY-PDj2Q__"
          alt="example"
          className="w-[80%] h-[80%]"
        />
        <div className="flex-col gap-2 absolute top-3 right-3 hidden group-hover:flex">
          <div className="h-[34px] w-[34px] rounded-full bg-white flex items-center justify-center cursor-pointer">
            <Heart className="w-4 h-4 " />
          </div>
          <div className="h-[34px] w-[34px] rounded-full bg-white flex items-center justify-center cursor-pointer">
            <Eye className="w-4 h-4 " />
          </div>
        </div>
        <div className="w-[55px] h-[26px] bg-[#DB4444] flex items-center justify-center rounded absolute top-3 left-3">
          <h3 className="text-xs ">-40%</h3>
        </div>
        <div className="w-full absolute bottom-0 left-0 bg-black rounded-bl-lg rounded-br-lg items-center justify-center cursor-pointer hidden group-hover:flex">
          <h3 className="text-base font-medium text-white">Add To Cart</h3>
        </div>
      </div>
      <div>
        <h2 className="text-base font-medium ">HAVIT HV-G92 Gamepad</h2>
        <div className="flex gap-2 ">
          <h3 className="text-[#DB4444] text-base font-medium">$120</h3>
          <h3 className="text-[#000000] text-base font-medium line-through">
            $160
          </h3>
        </div>
        <div className="flex gap-2 items-center">
          <Rate />
          <h3 className="text-[#000000] text-base font-medium">(88)</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
