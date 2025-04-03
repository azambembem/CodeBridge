// const Body = () => {
//   return <div className="flex-1">Body</div>;
// };

// export default Body;

import { useWishlistCache } from "@/services/wishlist";
import Loading from "./loading";
import Card from "./customs/card";

const Body = () => {
  const {
    wishlists: { data: wishlists, isLoading, isError }
  } = useWishlistCache();

  if (isLoading || isError) {
    return <Loading />;
  }

  return (
    <div className="flex-1">
      <div className="w-full mt-[40px] grid grid-cols-5 gap-6 max-2xl:grid-cols-4  max-xl:grid-cols-3">
        {wishlists?.map(({ product_id }) => (
          <Card key={product_id._id} product={product_id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
