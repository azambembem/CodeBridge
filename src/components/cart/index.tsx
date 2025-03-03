import Discount from "./customs/discount";
import Header from "./customs/header";
import Mapping from "./customs/mapping";

const Cart = () => {
  return (
    <div className="w-[90%] m-auto">
      <Header />
      <Mapping />
      <Discount />
    </div>
  );
};

export default Cart;
