import Categories from "./customs/categories";
import Flayer from "./customs/flayer";
import Today from "./customs/today";

const Home = () => {
  return (
    <div>
      <div className="flex gap-[64px] h-[384px] w-[90%] m-auto">
        <Categories />
        <div className="h-full border-r border-solid"></div>
        <Flayer />
      </div>
      <Today />
    </div>
  );
};

export default Home;
