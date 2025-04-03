import CardLoading from "./customs/card/loading";

const Loading = () => {
  return (
    <div className="flex-1">
      <div className="w-full mt-[40px] grid grid-cols-5 gap-6 max-2xl:grid-cols-4  max-xl:grid-cols-3">
        <CardLoading />
        <CardLoading />
        <CardLoading />
        <CardLoading />
        <CardLoading />
      </div>
    </div>
  );
};

export default Loading;
