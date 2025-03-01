import { useSelector } from "react-redux";
import Card from "./customs/card";
import Header from "./customs/header";

const Wishlists = () => {
  const { products } = useSelector((state) => state.wishlists);

  console.log(products);

  return (
    <div className="w-full mt-20">
      <Header />
      <div className="flex flex-col items-center mb-[60px]">
        <div className=" w-full mt-[40px] grid grid-cols-5 gap-6 max-2xl:grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 max-sm:grid-cols-1">
          {products.map((product) => (
            <Card key={product._id} product={product} />
          ))}
          {/* {products?.slice(0, expand ? undefined : 5).map((product) => (
          <Card key={product._id} product={product} />
          ))} */}
          {/* <Card />
          <Card />
          <Card />
          <Card /> */}
        </div>
      </div>
    </div>
  );
};

export default Wishlists;
