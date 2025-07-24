const ItMotivation = () => {
  const categories = [
    {
      id: 1,
      image:
        "https://www.susla.edu/assets/susla/images/WebDevelopmentImage.jpeg",

      alt: "웹 개발"
    },
    {
      id: 2,
      image:
        "https://aimarketingengineers.com/wp-content/uploads/2024/01/Data-Science-and-AI-intro.png",
      alt: "데이터 과학 및 AI"
    },
    {
      id: 3,
      image:
        "https://snb.thesagenext.com/blog/wp-content/uploads/2021/04/Network-Security-4.png",
      alt: "네트워크 및 보안"
    },
    {
      id: 4,
      image:
        "https://tse3.mm.bing.net/th/id/OIP.grGDf4PtWOTApZZLJr8gKgHaHa?r=0&w=626&h=626&rs=1&pid=ImgDetMain&o=7&rm=3",
      alt: "클라우드 컴퓨팅"
    }
  ];

  return (
    <div className="w-full  bg-gradient-to-l from-[#4BC0C8] via-[#C779D0] to-[#FEAC5E] py-16 md:py-20">
      <div className="w-[90%] max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-[18px] md:text-[20px] lg:text-[28px] font-semibold text-[#EEEEEE]">
            <span className="block">저희 코스를 통해 IT 세상을 탐험하세요</span>
          </h2>
        </div>

        {/* Category Cards */}
        {/* Desktop: 4 columns */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-5">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative group overflow-hidden rounded-lg"
            >
              <img
                src={category.image}
                alt={category.alt}
                className="w-60 h-60 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Tablet: 2x2 grid */}
        <div className="hidden sm:grid lg:hidden grid-cols-2 gap-4 md:gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative group overflow-hidden rounded-lg"
            >
              <img
                src={category.image}
                alt={category.alt}
                className="w-full h-40 md:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Mobile: 2x2 grid with smaller cards */}
        <div className="grid sm:hidden grid-cols-2 gap-3">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative group overflow-hidden rounded-lg"
            >
              <img
                src={category.image}
                alt={category.alt}
                className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItMotivation;
