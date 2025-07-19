import Body from "./customs/body";
import Header from "./customs/header";
import RelatedItem from "./customs/related-items";

const Product = () => {
  return (
    <div className="w-[90%] m-auto">
      <Header />
      <Body />
      <RelatedItem />
    </div>
  );
};

export default Product;
