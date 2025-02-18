import Categories from "./customs/categories";
import Flayer from "./customs/flayer";

const Home = () => {
  return (
    <div className="flex gap-[64px] h-[384px] w-[90%] m-auto">
      <Categories />
      <div className="h-full border-r border-solid"></div>
      <Flayer />
    </div>
  );
};

export default Home;
