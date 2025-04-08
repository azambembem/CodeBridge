const OurStory = () => {
  return (
    <div className="flex flex-row w-full">
      {/* Text Content - Left Side */}
      <div className="w-1/2 pl-12 py-16 h-[]">
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
          src="https://img.freepik.com/premium-photo/smiling-black-young-woman-holding-smartphone-shopping-bags_116547-28638.jpg"
          alt="Two women shopping with bags"
          className="w-full h-full object-cover bg-pink-400"
        />
      </div>
    </div>
  );
};

export default OurStory;
