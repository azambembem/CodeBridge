import Header from "./customs/header";
import CardLoading from "./customs/card/loading";

const Loading = () => {
  return (
    <div className="flex-1">
      <Header />
      <div className="mt-4">
        {/* Header */}
        <div className="flex items-center justify-between gap-2 h-[72px] shadow-md px-10">
          <div className="flex-1">
            <h3 className="text-base">Card Name</h3>
          </div>
          <div className="flex-1">
            <h3 className="text-base">Card Number</h3>
          </div>
          <div className="flex-1">
            <h3 className="text-base">Phone Number</h3>
          </div>
          <div className="flex-1">
            <h3 className="text-base">Actions</h3>
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-4">
          <CardLoading />
          <CardLoading />
          <CardLoading />
        </div>
      </div>
    </div>
  );
};

export default Loading;
