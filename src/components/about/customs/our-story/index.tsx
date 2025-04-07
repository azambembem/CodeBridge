const OurStory = () => {
  return (
    <div className="flex flex-row w-full">
      {/* Text Content - Left Side */}
      <div className="w-1/2 pl-12 py-16 h-[336px]">
        <h1 className="text-[54px] font-semibold mb-6">Our Story</h1>
        <p className="mb-4 text-[16px] mr-4 w-[525px] ">
          Launched in 2015, Exclusive is South Asia's premier online shopping
          marketplace with an active presence in Bangladesh. Supported by wide
          range of tailored marketing, data and service solutions, Exclusive has
          10,500 sellers and 300 brands and serves 3 millions customers across
          the region.
        </p>
        <p className="mb-4 text-[16px]  w-[525px] ">
          Exclusive has more than 1 Million products to offer, growing at a very
          fast, Exclusive offers a diverse assortment in categories ranging from
          consumer.
        </p>
      </div>
      <div className="w-1/2">
        <img
          src="https://s3-alpha-sig.figma.com/img/fcc8/9aaa/7b85f8c1dcce81e71e2eb178be13bd4d?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Iiqg6AcBi3wljXCFmYu1TtRWSP0Yk73WZf2AvaSQfaRI-g490vDfGtsQ2E1pliWoB9xd4hWnN0j98pzUl8TozKkxFDqqR4~~e6bL724e9diBKuPb8poiM2IXmsJf3Y5rAiDew~ewYTB3-OVSp5UaSaBiPOEyVUQoROCCyfKRmj7ho1q1xcJAWgBlSiPF~Mb7-eLz-6rFeH0-7ij5NORi4NsUxFdF3bR02rYR~CJxt8cbs4K6qcXHeuRVv3vxaZqXnpl4JCW3KYP~Xm6dJEbyop5wisE1tTcQ0pqiAN8XRzN55xYwRrgSFWS5-5WuEMCd7sOC7-~pE2SrFmzFw-ue4A__"
          alt="Two women shopping with bags"
          className="w-full h-full object-cover bg-pink-400"
        />
      </div>
    </div>
  );
};

export default OurStory;
