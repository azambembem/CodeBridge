import { useTodayCache } from "@/services/home";
import Card from "./customs/card";
import Loading from "./customs/card/loading";
import { useState } from "react";

const Mapping = () => {
  const [expand, setExpand] = useState<boolean>(false);
  const {
    products: { isLoading, isError, data: products }
  } = useTodayCache();

  if (isLoading || isError) return <Loading />;

  return (
    <div className="flex flex-col items-center mb-[60px]">
      <div className=" w-full mt-[40px] grid grid-cols-5 gap-6 max-2xl:grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 max-sm:grid-cols-1">
        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
        {products?.slice(0, expand ? undefined : 5).map((product) => (
          <Card key={product._id} product={product} />
        ))}
      </div>

      {!expand && (
        <div
          onClick={() => setExpand(true)}
          className="w-[234px] h-[56px] bg-[#db4444] rounded-md flex items-center justify-center cursor-pointer mt-[60px]"
        >
          <h3 className="text-[#fafafa] font-medium text-base">
            View All Products
          </h3>
        </div>
      )}
    </div>
  );
};

export default Mapping;
