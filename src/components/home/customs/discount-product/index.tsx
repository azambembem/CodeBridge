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
          src="https://s3-alpha-sig.figma.com/img/3cc9/43ca/7e210f637fc0504b7d93cd207df744c2?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XCVWETm1D8bi8-uLwodZ7ZHQpphWu57KKhsLoerSzhEF2-CS5D52867BadgeBPni88Qv~ov8eRGWA59Q18Hae3QhrQe53IWAtDFrFqd8CkpD32cnuqgtoGx5~dojvFQgw8XDilT5GwqvGHHK~ps3DkaQdm7gH~pLnFM8XWBNUfusL26PXcDOJZhd9OaYaAjh~JjWLybdqn4-8hyI-cK51tw3dKD2KIrkCOeNzq4PhRDpnECaWxRrhThN3kLofyw1ILDAbiPTX7xDr~KIPkmMyENadOjTuj9VjyGQswV4o4qjlV4c1Sqr7Bdr6GA4jJFL96yCXNfKlFGvc~1xcML66w__"
          alt=""
          className="w-full h-[330px]"
        />
      </div>
    </div>
  );
};

export default DiscountProduct;
