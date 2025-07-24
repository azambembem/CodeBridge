import {
  Camera,
  GamepadIcon,
  Headphones,
  Laptop,
  Phone,
  Watch
} from "lucide-react";
import Card from "./customs/card";

const MappingSecond = () => {
  return (
    <div className="flex flex-col items-center mb-[60px]">
      <div className=" w-full mt-[40px] grid grid-cols-6 gap-6">
        <Card icon={Phone} title="Phones" />
        <Card icon={Laptop} title="Computers" />
        <Card icon={Watch} title="SmartWatch" />
        <Card icon={Camera} title="Camera" />
        <Card icon={Headphones} title="HeadPhones" />
        <Card icon={GamepadIcon} title="Gaming" />
      </div>
    </div>
  );
};

export default MappingSecond;
