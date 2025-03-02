import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";

const Header = () => {
  const { products } = useSelector((state) => state.wishlist);

  return (
    <div className="h-[56px] w-full flex items-center justify-between mb-[60px]">
      <div>
        <h3 className="text-xl">
          Wishlists {Boolean(products.length) && `${products.length}`}
        </h3>
      </div>
      <Button disabled={!products.length}>Move All to Bug</Button>
    </div>
  );
};

export default Header;
