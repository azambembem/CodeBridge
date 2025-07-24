import Categories from "./categories";
import CategorySet from "./category-set";
import Flayer from "./flayer";

const Home = () => {
  return (
    <div>
      <div className="flex gap-[64px] h-[384px] w-[90%] m-auto">
        <Categories />
        <div className="h-full border-r border-solid" />
        <Flayer />
      </div>

      <CategorySet />
    </div>
  );
};

export default Home;
