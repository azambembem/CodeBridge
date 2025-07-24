import Categories from "./categories";
import Flayer from "./flayer";

const Home = () => {
  return (
    <div className="bg-gradient-to-l from-[#4BC0C8] via-[#C779D0] to-[#FEAC5E]">
      <div className="flex gap-[64px] h-[384px] w-[90%] m-auto">
        <Categories />
        <div className="h-full border-r border-solid" />
        <Flayer />
      </div>
    </div>
  );
};

export default Home;
