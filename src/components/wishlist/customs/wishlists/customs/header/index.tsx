import { Button } from "@/components/ui/button";
import { useReduxSelector } from "@/hooks/useRedux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { products } = useReduxSelector(({ wishlist }) => wishlist);

  return (
    <div className="h-[56px] w-full flex items-center justify-between mb-[60px]">
      <div>
        <h3 className="text-xl">
          Wishlists {Boolean(products.length) && `${products.length}`}
        </h3>
      </div>
      <Button
        variant={"destructive"}
        onClick={() => navigate("/cart")}
        disabled={!products.length}
      >
        Move All to Bug
      </Button>
    </div>
  );
};

export default Header;
