import JustForYou from "./customs/just-for-you";
import Wishlists from "./customs/wishlists";

const Wishlist = () => {
  return (
    <div className="w-[90%] m-auto">
      <Wishlists />
      <JustForYou />
    </div>
  );
};

export default Wishlist;
