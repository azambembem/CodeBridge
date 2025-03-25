const DiscountProduct = () => {
  return (
    <div className="h-[500px] bg-black w-[90%] m-auto flex justify-between">
      <div className="flex-1 h-full flex flex-col justify-center gap-8 p-[56px]">
        <p className="text-base font-semibold text-[#47B486]">Categories</p>
        <h3 className="text-5xl text-white font-semibold">
          Enhance Your Music Experience <br />
        </h3>
        <div className="flex items-center gap-4">
          <div className="w-[62px] h-[62px] rounded-full bg-white flex flex-col items-center justify-center">
            <h3 className="text-base font-semibold">23</h3>
            <h3 className="text-[11px]">Hours</h3>
          </div>
          <div className="w-[62px] h-[62px] rounded-full bg-white flex flex-col items-center justify-center">
            <h3 className="text-base font-semibold">05</h3>
            <h3 className="text-[11px]">Days</h3>
          </div>
          <div className="w-[62px] h-[62px] rounded-full bg-white flex flex-col items-center justify-center">
            <h3 className="text-base font-semibold">59</h3>
            <h3 className="text-[11px]">Minutes</h3>
          </div>
          <div className="w-[62px] h-[62px] rounded-full bg-white flex flex-col items-center justify-center">
            <h3 className="text-base font-semibold">35</h3>
            <h3 className="text-[11px]">Seconds </h3>
          </div>
        </div>

        <div className="w-[175px] h-[56px] bg-[#00FF66] flex items-center justify-center rounded-md">
          <h3 className="text-base font-semibold text-white">Buy Now!</h3>
        </div>
      </div>

      <div className="flex-1 h-full flex bg-black items-center justify-center">
        <img
          src="https://thumbs.dreamstime.com/b/jbl-boombox-speaker-black-background-bures-sur-yvette-france-april-th-portable-bluetooth-reflections-beautiful-highlight-p-217741316.jpg"
          alt=""
          className="w-full h-[330px]"
        />
      </div>
    </div>
  );
};

export default DiscountProduct;
