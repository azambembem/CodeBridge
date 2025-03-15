// import { useTodayCache } from "@/services/home";
import CardLoading from "./customs/card/loading";

const Loading = () => {
  // const {} = useTodayCache();
  return (
    <div className="flex flex-col items-center mb-[60px]">
      <div className=" w-full mt-[40px] grid grid-cols-5 gap-6 max-2xl:grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 max-sm:grid-cols-1">
        <CardLoading />
        <CardLoading />
        <CardLoading />
        <CardLoading />
        <CardLoading />
      </div>
      <div className="w-[234px] h-[56px] bg-[#db4444] rounded-md flex items-center justify-center cursor-pointer mt-[60px]">
        <h3 className="text-[#fafafa] font-medium text-base">
          View All Products
        </h3>
      </div>
    </div>
  );
};

export default Loading;
