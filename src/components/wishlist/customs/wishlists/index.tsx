import Card from "./customs/card";
import Header from "./customs/header";
import { useReduxSelector } from "@/hooks/useRedux";

const Wishlists = () => {
  const { products } = useReduxSelector(({ wishlist }) => wishlist); // Bu kod Redux store-dan wishlist qismini oladi va products ni ajratib oladi.

  console.log(products);

  return (
    <div className="w-full mt-20">
      <Header />
      <div className="flex flex-col items-center mb-[60px]">
        <div className=" w-full mt-[40px] grid grid-cols-5 gap-6 max-2xl:grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 max-sm:grid-cols-1">
          {products?.map((product) => (
            <Card key={product._id} product={product} /> // IProduct _id si orqali topadi va maplab beradi.
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlists;
